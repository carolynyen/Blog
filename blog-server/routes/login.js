var express = require('express');
var router = express.Router();
var assert = require('assert');
var bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');

router.get('/', function(req, res, next) {
    res.render('login', { redirect: req.query.redirect, message: null });
});

router.post('/', function(req, res, next) {
    if ((req.body.password == "")||(req.body.username == "")) {
        res.status(400).render('login', { redirect: req.body.redirect, message: "Please enter both a username and a password." });
        return;
    }
    var db_collection = req.app.locals.db.collection('Users');
    db_collection.find({"username": req.body.username }).toArray(function(err, result) {
        assert.equal(err, null);
        if (result.length != 0){
            bcrypt.compare(req.body.password, result[0].password, function(error, success) {
				if(success){
                    let contents = {algorithm: 'HS256', expiresIn: '2h', header: {'alg': 'HS256', 'typ': 'JWT'}};
                    jwt.sign({ "usr": req.body.username },'C-UFRaksvPKhx1txJYFcut3QGxsafPmwCY6SCly3G6c', contents, function(err, token) {
                        res.cookie('jwt', token);
                        if (req.body.redirect != null){
                            res.redirect(req.body.redirect);
                            return;
                        } else {
                            res.status(200).send("Authentication successful");
                            return;
                        }
                    });
				} else {
                    res.status(401).render('login', { redirect: req.body.redirect, message: "Incorrect password." });
                    return;
				}
			});
        } else {
            res.status(400).render('login', { redirect: req.body.redirect, message: "Please enter a valid username." });
            return;
        }
    });
});

router.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

module.exports = router;
