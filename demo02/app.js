var express = require('express')
  , cors = require('cors')
  , app = express();
  var path = require('path');

// CORS跨域，只允许origin为http://127.0.0.1:8089的跨域请求，origin为http://192.168.1.101:8089/的跨域请求不被允许
var corsOptions = {
  origin: 'http://127.0.0.1:8089',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
};
// CORS方式跨域
app.use(cors(corsOptions));

app.get('/api', function(req, res, next){
  res.json({msg: 'demo02 GET'});
});
app.put('/api', function(req, res, next){
  res.json({msg: 'demo02 PUT'});
});
app.get('/', function(req, res, next){
  res.sendFile(path.join(__dirname + '/index.html'));
});

app.listen(8089, function(){
  console.log('-enabled web server listening on port 8089');
});