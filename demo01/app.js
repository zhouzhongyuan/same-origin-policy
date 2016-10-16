var subdomain = require('express-subdomain');
var express = require('express');
var app = express();
var path = require('path');

var feedRouter = express.Router();
feedRouter.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/feed.html'));
});

var blogRouter = express.Router();
blogRouter.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + '/blog.html'));
});

app.use(subdomain('feed', feedRouter));
app.use(subdomain('blog', blogRouter));
app.listen(80);