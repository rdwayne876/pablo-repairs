const express = require( 'express')
require( 'dotenv').config()

const v1AuthRouter = require( '../src/v1/routes/auth.routes')

const app = express()

/**
 * MIDDLEWARES
 */
app.use( express.urlencoded({extended: true}))
app.use(express.json())

/**
 * APP ROUTING
 */
 app.use( "/api/v1/auth", v1AuthRouter)

module.exports =  app