'use strict'

const { get, post } = require('../helpers/http')
const config = require('@krosslynked/js-core/config')

async function createXpObject(data) {
	return post(config.dependencies.xp_object, data)
}

async function readXpObject() {
	return get(config.dependencies.xp_object)
}

module.exports = {
	createXpObject,
	readXpObject,
}
