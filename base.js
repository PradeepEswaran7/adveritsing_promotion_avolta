const compression = require('compression');
const path = require('path');
const http = require('http');
const express = require('express');
const fs = require('fs');
const config = JSON.parse(fs.readFileSync(path.join(__dirname,'../config/config.json')));

const env = process.argv[2];

const app = express();

app.use(compression());
app.use(express.json());
app.use(express.static('dist/create-promotion'));

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '../dist/create-promotion/index.html'));
});

class Base {

    app = app;
    
    serverPort() {
        return config[env].serverPort;
    }

    httpGetRequest(url, callback, errorCallback) {
        let data = '';
        const options = {
            host: config[env].host,
            port: config[env].port,
            path: url
        };

        http.get(options, (res) => {
            res.on('data', (chunk) => {
                data += chunk;
            })
            
            res.on('end', () => {
                callback(data);        
            })
        }).on("error", (err) => {
            errorCallback(err);
        }).end();
    };

    httpPostRequest(url, payload, callback, errorCallback) {
        let data = '';
        const options = {
            host: config[env].host,
            port: config[env].port,
            path: url,
            method: 'POST',
            body: payload
        };

        http.request(options, (res) => {
            res.on('data', (chunk) => {
                data += chunk;
            })
            
            res.on('end', () => {
                callback(data);        
            })
        }).on("error", (err) => {
            errorCallback(err);
        }).end();
    };
}

module.exports = new Base();

