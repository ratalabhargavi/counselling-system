const express = require('express') 
const cors=require('cors') 
const {MongoClient}= require('mongodb') 
 
const app=express() 
app.use(cors()) 
app.use(express.json()) 
 
const client = new MongoClient('mongodb+srv://admin1:admin1@cluster1.a4jajag.mongodb.net/?retryWrites=true&w=majority')
client.connect() 
const db = client.db('Online') 
const col = db.collection('register') 
col.insertOne({'student':"119"}) 
 
app.post('/register',(req,res)=>{ 
    col.insertOne(req.body) 
    console.log(req.body) 
    res.send("data inserted successfully") 
 
}) 
 
app.get('/',(req,res)=>{ 
    res.send('<h1>Hello KLU</h1>') 
}) 
 
app.get('/about',(req,res)=>{ 
    res.send('<h1>This Is About Page</h1>') 
}) 
 
app.get('/contact',(req,res)=>{ 
    res.send('<h1>This Is Contact Page</h1>') 
}) 
 
app.listen(8080,()=>{console.log('Express server is running')})
