const { connSequelize, BD } = require('../../config/coneccao')
const mysql = require('mysql2')
const express = require('express')
const {tb_contato} = require ('../models/modeloContato')


connSequelize.sync()

async function runServer() {

    let resultBusca =  await tb_contato.findAll({
        raw: true
    })

    console.log(resultBusca) 
}

runServer()
