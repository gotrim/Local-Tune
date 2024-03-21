const { connSequelize, BD } = require('./config/coneccao')
const mysql = require('mysql2')
const express = require('express')
const {tb_contato} = require('./src/controllers/controlerContato.js')
const {Query} = require ('./src/controllers/controlerContato.js')


connSequelize.authenticate().then(() => {
    console.log(`Conexão com sucesso ${BD}`)
}).catch(erroConn => {
    console.error(`erro ao conectar no banco ${BD}`, erroConn)
}) 
