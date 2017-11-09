var express = require('express'),
    router = express.Router();
var colors = require('colors');
router.get('/', function(req, res) {
    res.render('page1');
});
router.get("/detial", function (req, res, next) {

    res.render('detial');
});
var result;
var TEST_TABLE = 'database';

var newsList
var hotNews
var videoNews
var mongo=require("mongodb");
var host="localhost";
//var port=mongo.Connection.DEFAULT_PORT;
var server=mongo.Server(host,27017,{auto_reconnect:true});

var db=new mongo.Db("tengxunNews",server,{safe:true});
db.open(function (err,db) {
    db.collection("newsComponent", function (err,collection) {
        if(err) throw err;
        else{
            collection.find({}).toArray(function(err,docs){
                if(err) throw  err;
                else{

                    result = docs;
                    db.close();
                }
            });
        }
    });
    db.collection("newsList", function (err,collection) {
        if(err) throw err;
        else{
            collection.find({}).toArray(function(err,docs){
                if(err) throw  err;
                else{

                    newsList = docs;
                    db.close();
                }
            });
        }
    });
    db.collection("hotNews", function (err,collection) {
        if(err) throw err;
        else{
            collection.find({}).toArray(function(err,docs){
                if(err) throw  err;
                else{

                    hotNews = docs;
                    db.close();
                }
            });
        }
    });
    db.collection("videoNews", function (err,collection) {
        if(err) throw err;
        else{
            collection.find({}).toArray(function(err,docs){
                if(err) throw  err;
                else{

                    videoNews = docs;
                    db.close();
                }
            });
        }
    });




});

router.get('/api/user/signup', function (req, res, next) {


    console.log(result)
    res.send(result)
    console.log(colors.green('hello'));

});
router.post('/api/user/newsList', function (req, res, next) {
    console.log(newsList)

    var targetData=req.body.targetData;
    console.log(targetData)
    res.send(newsList[targetData])


});


router.post('/api/user/newsDetailLeft', function (req, res, next) {



    res.send(hotNews)

});
router.post('/api/user/newsDetailRight', function (req, res, next) {



    res.send(videoNews)

});
module.exports = router;