'use strict'

const http = require('http')
const { createTerminus } = require('@godaddy/terminus')
const { config, logger } = require('@krosslynked/js-core')
const postgres = require('./helpers/postgres')
const app = require('./app')

const server = http.createServer(app)

const healthCheck = async () => {
	logger.info('Checking health...')
	await postgres.query('select 1')
	return true
}

const cleanup = async () => {
	logger.info('Service is shutting down...')
	postgres.close(() => logger.info('Postgres pool closed'))
}

createTerminus(server, {
	logger: logger.info,
	healthChecks: { '/healthcheck': healthCheck },
	onSignal: cleanup,
})

server.listen(config.http.port)
logger.info('Service started', { port: config.http.port })

module.exports = server
