var express = require('express');
var router = express.Router();
const {MongoClient} = require('mongodb');



/* GET home page. */
router.get('/', function(req, res, next) {
  try{
    const username = req.query.username;
    MongoClient.connect("mongodb://asset_mapping:27017/", function(err,db){
      if (err) console.log(err);
      userdb = db.db('user');
      userdb.collection('userProfile').find({uname: username}, ).toArray(function(err,result){
        if (err) console.log(err);
        res.send({profile_image: result[0].profile_image});
      });
    })
  }
  catch(err){

  }
  
 
});

router.get("/test", async function(req,res,next) {
  res.send("hello world")
})

module.exports = router;
