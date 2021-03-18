const http = require('http')

function get(url) {
	return new Promise((resolve, reject) => {
		const req = http.get(url, res => {
			res.setEncoding('utf8')
			let body = ''
			res.on('data', data => {
				body += data
			})
			res.on('end', () => {
				resolve(JSON.parse(body))
			})
		})

		req.on('error', (err) => {
			reject(err)
		})

		req.end()
	})
}

function post(url, data) {
	const options = {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			'Content-Length': JSON.stringify(data).length,
		},
	}
	return new Promise((resolve, reject) => {
		const req = http.request(url, options, res => {
			res.setEncoding('utf8')
			let body = ''
			res.on('data', data => {
				body += data
			})
			res.on('end', () => {
				resolve(JSON.parse(body))
			})
		})

		req.on('error', (err) => {
			reject(err)
		})

		req.write(JSON.stringify(data))
		req.end()
	})
}

module.exports = {
	get,
	post,
}
