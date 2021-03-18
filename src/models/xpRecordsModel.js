'use strict'

const { get, post } = require('../helpers/http')
const config = require('@krosslynked/js-core/config')

async function createXpRecord(data) {
	return post(config.dependencies.xp_records, data)
}

async function readXpRecord() {
	return get(config.dependencies.xp_records)
}

module.exports = {
	createXpRecord,
	readXpRecord,
}
