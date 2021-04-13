const tag = "[index.js_v0.0.22]";
 
const express = require('express')
const path = require('path');
var request = require('request');
var es = require('./exeshell.js');

const app = express()
const port = 3000

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.send(tag + ' Hello World!')
})

app.get('/exeshell', (req, res) => {
	console.log(req.url);
	var a = req.url;
	var b = a.split('?');
	var c = b[1].split('cmd=');
	var scmd = c[1];
	var s = es.run(res,scmd);
	//res.send(tag + ' s=' +s);
})
app.get('/download', (req, res) => {
	console.log(req.url);
	var a = req.url; 
	var b = a.split('?');
	var d = b[1].split('&'); 
	var c = d[0].split('url=');
	var url = c[1]; 
	var f = d[1].split('filename=');
	
	const { DownloaderHelper } = require('node-downloader-helper');
	var dir =  __dirname+"\\public\\dl";
	const dl = new DownloaderHelper(url,dir,{fileName:f[1],override:true});

	dl.on('end', () =>{res.send(tag + ' dir=' + dir);
	})  
	dl.start();

	

})

app.get('/geturl', function(req, res){	
	var a = req.url;
	var b = a.split('?');
	var c = b[1].split('url=');
	var url = c[1];

	console.log(url);

	// request module is used to process the yql url and return the results in JSON format
	request(url, function(err, resp, body) {
		//body = JSON.parse(body);
		var s = body; 
	  // pass back the results to client side
		res.send(s);
	}); 
})

app.listen(port, () => {
  console.log(tag + ` Example app listening at http://localhost:${port}`)
})