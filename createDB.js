// const MongoClient = require("mongodb").MongoClient;

// const url = "mongodb://localhost:27017/";
// const mongoClient = new MongoClient(url);
// var data = require("./data.js").data
// // Подключаемся к серверу
// mongoClient.connect(function (err, client) {
//     // обращаемся к базе данных admin
//     const db = client.db("guac");
//     db.dropDatabase();
//     var collection = db.collection("heroes");
//     collection.insertMany(data, function (err, result) {
//         client.close();
//     })
// }) 

var mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/guac')
var Hero = require("./models/hero").Hero

var hero = new Hero({
    title: "Хуан",
    nick: "juan"
})


hero.save(function(err, hero, affected){
    console.log(hero.title)
})




