const express = require('express')

const app = express()

app.use('/', express.static(__dirname + '/public'))

function decryptQueryParams(req, res ,next) {

    // TODO: decrypt all query params as per our logic

    next()
}

function decodeQueryBase64(req, res, next) {
    for (let q in req.query) {
        let data = req.query[q] 
        data = new Buffer(data, 'base64').toString('ascii')
        req.query[q] = data
    }
    next()
}

app.get('/eval',  decodeQueryBase64, (req, res) => {
    console.log(req.query)
    let s=req.query.data
    // TODO: eval the code actually
    // document.getElementById("demo").innerHTML =req.query;
    // (index2.html).getElementById("demo").innerHTML =req.query;
    // res.sendFile(__dirname+'/public/index2.html')
    res.send('<div> Evaluated Result : <p id="demo">' + req.query['code'] + '</p></div>')
})

app.listen(4545, () => {
    console.log('server started on http://localhost:4545')
})