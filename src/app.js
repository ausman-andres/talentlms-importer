'use strict'

const express = require('express')
const { errorHandler } = require('@krosslynked/js-core/utils')
const { talentlmsRoute } = require('./routes')

const app = express()

app.use(express.json()) // JSON only

// routes
app.use('/', talentlmsRoute)

app.use(errorHandler)

module.exports = app
