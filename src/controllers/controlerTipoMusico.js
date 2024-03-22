const { connSequelize, BD } = require('../../config/coneccao')
const mysql = require('mysql2')
const express = require('express')
const {tb_tipoMusical} = require ('../models/modeloTipoMusica')


connSequelize.sync()

async function runServer() {

    let resultBusca =  await tb_tipoMusical.findAll({
        raw: true
    })

    console.log(resultBusca) 
}

runServer()