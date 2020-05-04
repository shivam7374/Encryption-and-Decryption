const express = require('express')

const app = express()

app.use('/', express.static(__dirname + '/public'))

function decryptQueryParams(req, res ,next) {

    // TODO: decrypt all query params as per our logic
    
    // console.log(req.query)

    for (let q in req.query) 
    {
            
        let data = req.query[q] 
        // for (let i in data) 
    //  {
    //     console.log(data[i]+'\n')
    //     // data = new Buffer(data, 'base64').toString('ascii')
    //     // let lower=/([a-z]+)/g
    //     // let upper=/([A-Z]+)/g
    //     if(isNaN(data[i] * 1))
    //     {
    //     if(data[i]==data[i].toLowerCase())
    //     {
    //         data[i]=data[i].toUpperCase()
    //     }
    //     else if(data[i]==data[i].toUpperCase())
    //     {
    //         data[i]=data[i].toLowerCase()
    //     }
    //     }
    //  }
    swapcase = function swapcase(str) {
        return str.replace(/([a-z]+)|([A-Z]+)/g, function(match, chr) {
            return chr ? match.toUpperCase() : match.toLowerCase();
        });
    }
        req.query[q] = swapcase(data)
    }
    // console.log(req.query)
    
    
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

app.get('/eval', decryptQueryParams,decodeQueryBase64, (req, res) => {
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