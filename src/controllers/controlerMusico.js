const { connSequelize, BD } = require('../../config/coneccao')
const mysql = require('mysql2')
const express = require('express')
const {tb_musico} = require ('../models/modeloMusico')


connSequelize.sync()

async function runServer() {

    let resultBusca =  await tb_musico.findAll({
        raw: true
    })

    console.log(resultBusca) 
}

runServer()