# hapi-api-rate-limit

Redis api rate limit plugin for hapi

[![Dependency Status](https://www.versioneye.com/user/projects/53e2944ce0a229671f00000c/badge.svg?style=flat)](https://www.versioneye.com/user/projects/53e2944ce0a229671f00000c)

[![NPM](https://nodei.co/npm/hapi-api-rate-limit.png)](https://nodei.co/npm/hapi-api-rate-limit/)

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
	requestLimit: 1 // 1 request per interval
};

server.pack.require('hapi-api-rate-limit', options, function (err) {
	// plugin is loaded
});

```

### License

MIT
