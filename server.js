const express = require ('express');
const pcdata = require('./func');
const app = express ();
const port = 3333;

app.get('/', (req, res) => {
    let json = pcdata.getpcdata()
    res.json(json)
})

app.listen(port,()=> {
    console.log(`Esta pagina é aberta em http://localhost:${port}`)
})