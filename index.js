var express = require('express')
	, path = require('path')
	, bodyParser = require('body-parser')
	, http = require('http')
	, async = require('async')
	, fs = require('fs')
;

var app = express()
	, port = parseInt(process.env.PORT || '8888')
	, server = http.createServer(app)
;

app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res, next) => {
	console.log('home')
	var filePath = path.join(__dirname, './home.html')
	res.sendFile(filePath);
});

app.get('/case.html', (req, res, next) => {
	console.log('case')
	var filePath = path.join(__dirname, './case.html')
	res.sendFile(filePath);
});

app.get('/main.css', (req, res, next) => {
	var filePath = path.join(__dirname, './main.css')
	res.sendFile(filePath);
})

app.get('/case.css', (req, res, next) => {
	var filePath = path.join(__dirname, './case.css')
	res.sendFile(filePath);
})

server.on('listening', () => {
	var addr = server.address()
		, bind = typeof addr === 'string'
			? 'pipe ' + addr
			: 'port ' + addr.port
	;
	console.log('Listening on ' + bind);
});

server.listen(port);
