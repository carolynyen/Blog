var express = require('express');
var router = express.Router();
var assert = require('assert');
var jwt = require('jsonwebtoken');

router.all('/:username*', function(req, res, next) {
    var token = req.cookies.jwt;
    if (token) {
        jwt.verify(token, 'C-UFRaksvPKhx1txJYFcut3QGxsafPmwCY6SCly3G6c', function(err, success) {
            if (err) {
                res.status(401).send("Unauthorized: wrong JWT token");
                return;
            } else {
                if (req.params.username == success.usr) {
                    next();
                } else {
                    res.status(401).send("Unauthorized: wrong or nonexistent user.");
                    return;
                }
            }
        });
    } else {
        res.status(401).send("Unauthorized: no JWT token");
        return;
    }
});

router.get('/:username', function(req, res, next) {
    var db_collection = req.app.locals.db.collection('Posts');
    db_collection.find({"username": req.params.username }).toArray(function(err, result) {
        assert.equal(err, null);
        res.status(200).json(result);
    });
});

router.get('/:username/:postid', function(req, res, next) {
    if (isNaN(parseInt(req.params.postid))){
        res.status(400).send("Bad Request: Invalid postid number");
        return;
    }
    var db_collection = req.app.locals.db.collection('Posts');
    db_collection.findOne({$and: [{"username": req.params.username },
								{"postid": parseInt(req.params.postid)}]},
    function(err, result){
        assert.equal(err, null);
        if (result){
            res.status(200).json(result);
        } else {
            res.status(404).send("Not found: Post doesn't exist");
            return;
        }
    });
});

router.post('/:username/:postid', function(req, res, next) {
    if ((isNaN(parseInt(req.params.postid))) || (parseInt(req.params.postid) < 1)){
        res.status(400).send("Bad Request: Invalid postid number");
        return;
    }
    var db_collection = req.app.locals.db.collection('Posts');
    if ((req.body.title == null) || (req.body.body == null)){
        res.status(400).send("Bad Request: Must include title and body in valid JSON form.");
        return;
    }
    db_collection.findOne({$and: [{"username": req.params.username },
								{"postid": parseInt(req.params.postid)}]},
    function(err, result){
        assert.equal(err, null);
        if (result){
            res.status(400).send("Bad request: post exists.");
            return;
        } else {
            db_collection.insertOne({"postid": parseInt(req.params.postid),
                                     "username": req.params.username,
                                     "created": new Date().getTime(),
                                     "modified": new Date().getTime(),
                                     "title": req.body.title,
                                     "body": req.body.body }, function(err, result){
                                         res.sendStatus(201);
            });
        }
    });
});

router.put('/:username/:postid', function(req, res, next) {
    if (isNaN(parseInt(req.params.postid))){
        res.status(400).send("Bad Request: Invalid postid number");
        return;
    }
    if ((req.body.title == null) || (req.body.body == null)){
        res.status(400).send("Bad Request: Must include title and body.");
        return;
    }
    var db_collection = req.app.locals.db.collection('Posts');
    db_collection.findOne({$and: [{"username": req.params.username },
								{"postid": parseInt(req.params.postid)}]},
    function(err, result){
        assert.equal(err, null);
        if (!result){
            res.status(400).send("Bad request: no post found.");
            return;
        } else {
            db_collection.updateOne({$and: [{"username": req.params.username },
        								{"postid": parseInt(req.params.postid)}]},
                                        {$set: {"username": req.params.username,
                                         "modified": new Date().getTime(),
                                         "title": req.body.title,
                                         "body": req.body.body }}, function(err, result){
                                              res.sendStatus(200);
                                         });
        }
    });
});

router.delete('/:username/:postid', function(req, res, next) {
    if (isNaN(parseInt(req.params.postid))){
        res.status(400).send("Bad Request: Invalid postid number");
        return;
    }
    var db_collection = req.app.locals.db.collection('Posts');
    db_collection.findOne({$and: [{"username": req.params.username },
								{"postid": parseInt(req.params.postid)}]},
    function(err, result){
        assert.equal(err, null);
        if (!result){
            res.status(400).send("Bad request: nonexistent post.");
        } else {
            db_collection.deleteOne({$and: [{"username": req.params.username },
        								{"postid": parseInt(req.params.postid)}]},
                                        function(err, result){
                res.sendStatus(204);
            });
        }
    });
});

router.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

module.exports = router;
