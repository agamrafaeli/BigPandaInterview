var express = require('express');
var router = express.Router();
var mongojs = require('mongojs');
var db = mongojs('mongodb://127.0.0.1:27017/local', ['comments']);
var md5 = require('md5');

/* GET All Todos */
router.get('/comments', function(req, res, next) {

    db.comments.find(function(err, comments) {
        if (err) {
            res.send(err);
        } else {
        	res.header('Access-Control-Allow-Origin', '*');
		    res.header('Access-Control-Allow-Methods', 'GET, POST');
		    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
            res.json({"data":comments});
        }
    });
});

router.post('/submit', function(req, res, next) {
	gravatar_hash = md5(req.body.email);
	new_comment = {
		"email": req.body.email,
		"text": req.body.text,
		"gravatar_hash": gravatar_hash
	}
	db.comments.insert(new_comment)
	return res.json({"result": "OK"})
});

module.exports = router;