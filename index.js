import express from 'express'

const app=express()

app.get("/",(req,res)=>{
    res.sendStatus(404)
})

app.listen(5000,()=>{
    console.log("server is listing on 5000")
})