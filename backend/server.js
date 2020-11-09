const express = require('express')
const products = require('./data/products')

const app = express()

app.get('/api/products',(req,res)=>{
    res.json(products)
})

app.listen(5000,console.log('server running in port 5000'))