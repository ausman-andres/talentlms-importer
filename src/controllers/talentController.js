'use strict'

const { get, post } = require('../helpers/http')
const { createUser, readUser, createExternalId } = require('../models/userModel')
const { createXpObject, readXpObject } = require('../models/xpObjectModel')
const { createXpRecord, readXpRecord } = require('../models/xpRecordsModel')

async function demoCourses(data) {
	const xpObject = await createXpObject({
		externalId: '156',
		externalIdSource: 'TalentLMS',
		name: 'Anonymised Demo data',
		category: 'Demo data',
	})

	const promiseArray = data?.policy_training.map(async (userEntry) => {
		const { id: userId } = await createUser({
			email: `${userEntry.id}@dummy.com`,
		})

		await createExternalId({
			extId: userEntry.id,
			extSrc: 'TalentLMS',
		})

		const recordPromise = createXpRecord({
			externalId: userEntry.id,
			externalIdSource: 'TalentLMS',
			userId: userId,
			xpObjectId: xpObject.id,
			duration: userEntry.completed_on_timestamp - userEntry.enrolled_on_timestamp,
			score: parseInt(userEntry.completion_percentage),
		})

		return recordPromise
	})

	await Promise.all(promiseArray)

	return 'done'
}

async function scrapeCourses() {
	return { hello: 'world' }
}

module.exports = {
	demoCourses,
	scrapeCourses,
}
