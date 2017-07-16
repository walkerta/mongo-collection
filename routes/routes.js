var express = require('express');
var app = express();
var mainRouter = express.Router();
var rockCollection = mongoose.model('rockCollection', rocksSchema);
var getRock = function (req, res, next) {

};

router.get('/getRock', function(req, res) {
  req.findAll.rocks;
  res.render("app", rocks);
  res.redirect('/');
});

//Add
router.post('/createRock', function(req, res){
  rock.create({
    color: req.body.newColor,
    shape: req.body.newShape,
    size: req.body.newSizeInMM,
    foundDate: req.body.newfoundDate
  }).then(function(){
    rock.save;
    res.redirect('/');
  });
});
module.exports = rockCollection;

let rockID = mongoose.model('_id', rocksSchema);

//Update
router.patch('/updateRock/:id', function (req, res) {
  rock.find(rockID).exec(function(err, rocks){
    res.render("app", rocks);
    res.redirect('/');
  });

//Delete
router.post('/deleteRock/:id'), function(req,res){
  rock.find(rockID).remove().exec(function (err, rocks){
    res.render("app", rocks);
    res.redirect('/');
  });

module.exports = mainRouter;
