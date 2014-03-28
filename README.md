# hapi-api-rate-limit

Redis api rate limit plugin for hapi

### Usage

To use default settings simply write:

```javascript
var Hapi = require('hapi');
var server = new Hapi.Server();


server.pack.require('hapi-api-rate-limit', function (err) {
	// plugin is loaded
});

```

If you want to overwrite the default settings:

```javascript
var Hapi = require('hapi');
var server = new Hapi.Server();

var options = {
	interval: 10, // seconds
	requestLimit: 1 // 1 request per time frame
};

server.pack.require('hapi-api-rate-limit', options, function (err) {
	// plugin is loaded
});

```

### License

MIT
