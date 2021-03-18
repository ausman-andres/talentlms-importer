'use strict'

const config = require('@krosslynked/js-core/config')

module.exports = require('@krosslynked/js-core/utils/pgPool')(config.postgres.connection)
