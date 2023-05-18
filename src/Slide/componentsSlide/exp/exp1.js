const express = require('express')
const app = express()
let P = require("./exp.js").P

app.use(express.json())
app.get('/produtos',(req,res) => {
    req.body = {teste: '1'}
    const {teste} = req.body
    const teste1 = {teste}
    P[0].id="P1"
    P.push(teste1)
    console.log(P)
})