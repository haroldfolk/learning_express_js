var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express-HaroldFolk' });

});
router.get('/mi_vista',function (req, res, next) {
    res.render('my_view', { title: 'Express-HaroldFolk | my_view' });

})

module.exports = router;
