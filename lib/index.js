var redback = require('redback'),
	Hoek = require('hoek'),
	Defaults = require('./defaults');

exports.register = function (plugin, options, next) {
	var settings = Hoek.applyToDefaults(Defaults, options);
	if (!settings.enabled) {
		return next();
	}

	var ratelimit;
	if (options.client) {
		ratelimit = redback.use(options.client).createRateLimit('requests');
	} else {
		ratelimit = redback.createClient().createRateLimit('requests');
	}

	var error = plugin.hapi.error.wrap(new Error(), settings.error.code, settings.error.message);
	error.reformat();

	plugin.ext('onRequest', function(request, reply) {
		if (request.path.match(settings.path)) {
			ratelimit.add(request.info.remoteAddress);

			ratelimit.count(request.info.remoteAddress, settings.interval, function (err, requests) {
				if (!err && requests > settings.requestLimit) {
					return reply(error);
				} else {
					return reply();
				}
			});
		} else {
			return reply();
		}
	});

	return next();
};
