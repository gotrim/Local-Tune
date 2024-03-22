const { connSequelize, BD } = require('../../config/coneccao')
const mysql = require('mysql2')
const express = require('express')
const {tb_usuario} = require ('../models/modeloUsuario')


connSequelize.sync()

async function runServer() {

    let resultBusca =  await tb_usuario.findAll({
        raw: true
    })

    console.log(resultBusca) 
}

runServer()