'use strict'

const express = require('express')
const { logger } = require('@krosslynked/js-core')
const { routeHandler } = require('@krosslynked/js-core/utils')
const talentController = require('../controllers/talentController')

const router = express.Router()

const scrapeCourses = async (_req, res) => {
	// const r = await talentController.scrapeCourses()
	// logger.info('TalentLMS scraped', r)
	// res.send(r)
	res.sendStatus(404)
}

const demoCourses = async (req, res) => {
	const data = req.body
	const r = await talentController.demoCourses(data)
	logger.info('TalentLMS demo scraped', r)
	res.send(r)
}

router.post('/courses', routeHandler(demoCourses))
router.get('/courses', routeHandler(scrapeCourses))

module.exports = router
