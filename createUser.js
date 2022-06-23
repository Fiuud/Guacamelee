var mongoose = require("mongoose")
mongoose.connect("mongodb://localhost/guac")
var User = require("./models/User.js").User

var first_user = new User({
    username: "Ernest",
    password: "mamutov"
})

first_user.save(function(err,user){
    if(err) throw err
    console.log(user)
})