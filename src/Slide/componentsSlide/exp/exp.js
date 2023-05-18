const express = require('express')
const app = express(), P = require('../../../../db.json').Produtos

app.use(express.json())
app.get('/produtos',(req,res) => {
    console.log(P)
    return res.json(P)
})
app.post('/produtos',(req,res) => {
    req.body = {teste: '1'}
    const {teste} = req.body
    const teste1 = {teste}
    P[0].id="P1"
    P.push(teste1)
    console.log(P)
    return res.status(201).json(P)
})
console.log(P)

app.listen(3333,() => console.log('O servidor foi iniciado') )