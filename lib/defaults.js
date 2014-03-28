module.exports = {
	enabled: true,
	client: null,
	interval: 60,
	requestLimit: 100,
	path: /^\/api\//,
	error: {
		code: 429,
		message: 'Api rate limit reached'
	}
}
