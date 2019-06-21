var express = require('express');
var router = express.Router();
var assert = require('assert');
var commonmark = require('commonmark');
var parser = new commonmark.Parser();
var renderer = new commonmark.HtmlRenderer();

router.get('/:username', function(req, res, next) {
    var db_collection = req.app.locals.db.collection('Posts');
    var startID;
    if (req.query.start != null) {
        startID = parseInt(req.query.start);
    } else {
        startID = 1;
    }
    if (isNaN(startID)){
        res.status(400).send("Invalid start number");
        return;
    }
    db_collection.find({$and: [{"username": req.params.username },
								{"postid": {$gte: startID}}]}).toArray(function(err, result) {
        assert.equal(err, null);
        var next = null;
        var nextURL;
        var homeURL = '/blog/'+req.params.username;
        if (result.length > 5) {
            next = result[5].postid;
            nextURL = '/blog/'+req.params.username+'?start='+next;
            result = result.slice(0,5);
        }
        for (let post of result) {
            if (post){
                post.title = renderer.render(parser.parse(post.title));
                post.body = renderer.render(parser.parse(post.body));
            }
        }
        res.render('blog', { posts: result, username: req.params.username, next: nextURL, home: homeURL });
    });
});

router.get('/:username/:postid', function(req, res, next) {
    var db_collection = req.app.locals.db.collection('Posts');
    db_collection.findOne({$and: [{"username": req.params.username },
								{"postid": parseInt(req.params.postid)}]},
    function(err, result){
           assert.equal(err, null);
           if (result){
               result.title = renderer.render(parser.parse(result.title));
               result.body = renderer.render(parser.parse(result.body));
               res.render('blog', { posts: [result], username: req.params.username, next: null, home: null });
           } else {
               res.status(404).send("Not found");
               return;
           }
       });
});

router.use(function(req, res, next) {
  var err = new Error('Post Not Found');
  err.status = 404;
  next(err);
});

module.exports = router;
