// Main starting point of the application
const express = require('express')
const http = require('http')
const bodyParser = require('body-parser')
const morgan = require('morgan')

const app = express()

/// App Setup

// any incoming requests will be passed to these middlewares
app.use(morgan('combined')) // morgan is a logging framework
app.use(bodyParser.json({ type: '*/*' })) // will attempt to parse all requests to json

// Server Setup
const port = process.env.PORT || 3090 // will look for a defined PORT first
const server = http.createServer(app)
server.listen(port)
console.log('Server listening on:', port)
