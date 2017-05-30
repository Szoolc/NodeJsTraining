//var express = require('express');
//var path = require('path');
//var open = require('open');

import express from 'express';
import path from 'path';
import open from 'open';
import compression from 'compression';

const port = 3000;
const app = express();
app.use(compression());
app.use(express.static('dist'));

app.get('/users',function(req,res){
    res.json([
        {"id":1,"firstName":"Bob","lastName":"Smith","email":"bob@gmail.com"},
        {"id":2,"firstName":"Alice","lastName":"Norton","email":"alice@gmail.com"},
        {"id":3,"firstName":"Tom","lastName":"Lee","email":"tom@gmail.com"}
    ]);
});

app.get('/about',function(req,res){
    res.sendFile(path.join(__dirname,"../dist/about.html"));
});

app.get('/',function(req,res){
    res.sendFile(path.join(__dirname,'../dist/index.html'));
});
app.listen(port,function(err){
    if(err){
        console.log(err); //eslint-disable-line no-console
    }
    else{
        open("http://localhost:"+port);
    }
});