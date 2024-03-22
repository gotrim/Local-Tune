const { connSequelize, BD } = require('./config/coneccao')
const mysql = require('mysql2')
const express = require('express')
const {Query} = require ('./src/controllers/controlerTipoUsuario')



connSequelize.authenticate().then(() => {
    console.log(`Conexão com sucesso ${BD}`)
}).catch(erroConn => {
    console.error(`erro ao conectar no banco ${BD}`, erroConn)
}) 
