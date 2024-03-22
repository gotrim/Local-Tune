const { connSequelize, BD } = require('../../config/coneccao')
const mysql = require('mysql2')
const express = require('express')
const {tb_tipoUsuario} = require ('../models/modeloTipoUsuario')


connSequelize.sync()

async function runServer() {

    let resultBusca =  await tb_tipoUsuario.findAll({
        raw: true
    })

    console.log(resultBusca) 
}

runServer()