'use strict'

const logger = require('@krosslynked/js-core/logger')
const pkg = require('../package.json')

module.exports = {
	self: {
		name: process.env.NAME || pkg.name,
	},
	http: {
		port: process.env.PORT || 600,
	},
	dependencies: {
		xp_object: 'http://localhost:651/',
		xp_records: 'http://localhost:653/',
		user_core: 'http://localhost:611/',
	},
	postgres: {
		client: 'pg',
		connection: {
			host: process.env.PGHOST || 'localhost',
			port: process.env.PGPORT || '5432',
			database: process.env.PGDATABASE || '',
			user: process.env.PGUSER || 'root',
			password: process.env.PGPASSWORD || '',
		},
		log: {
			warn: logger.notice,
			error: logger.error,
			debug: logger.debug,
		},
		migrations: {
			tableName: 'knex_migrations',
		},
	},
}
