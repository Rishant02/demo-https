const fs = require('fs')
const express = require('express')
const https = require('https')
const path = require('path')

const app = express()

const credentials = {
    key:fs.readFileSync(path.join(__dirname,'ssl','client-key.pem')),
    cert:fs.readFileSync(path.join(__dirname,'ssl','client-cert.pem'))
}

app.get('/api',(req,res)=>{
    res.json({message:'You are accessing https server'})
})

const httpsServer = https.createServer(credentials,app)
  
httpsServer.listen(443, () => {
    console.log("Https server listing on port : 443")
});
