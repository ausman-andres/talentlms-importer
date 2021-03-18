'use strict'

const { get, post } = require('../helpers/http')
const config = require('@krosslynked/js-core/config')

async function createUser(data) {
	return post(config.dependencies.user_core + 'user/', data)
}

async function readUser() {
	return get(config.dependencies.user_core)
}

async function createExternalId(data) {
	return post(config.dependencies.user_core + 'extid/', data)
}

module.exports = {
	createUser,
	readUser,
	createExternalId,
}
