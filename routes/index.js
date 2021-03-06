var express = require('express');
var router = express.Router();
var User = require("./../models/User").User

/* GET home page. */
router.get('/', function (req, res, next) {
  req.session.greeting = "Hi!!!!"
  res.render('index', {
    title: 'Guacamelee',
    counter: req.session.counter
  });
});

/* GET login/registration page. */
router.get('/logreg', function (req, res, next) {
  res.render('logreg', { title: 'Вход', error: null });
});

/* POST login/registration page. */
router.post('/logreg', function (req, res, next) {
  var username = req.body.username
  var password = req.body.password
  User.findOne({ username: username }, function (err, user) {
    if (err) return next(err)
    if (user) {
      if (user.checkPassword(password)) {
        req.session.user = user._id
        res.redirect('/')
      } else {
        res.render('logreg', { title: 'Вход', error: 'Пароль не верный' })
      }
    } else {
      var user = new User({ username: username, password: password })
      user.save(function (err, user) {
        if (err) return next(err)
        req.session.user = user._id
        res.redirect('/')
      })
    }
  })
});

/* POST logout. */
router.post('/logout', function (req, res, next) {
  req.session.destroy()
  res.locals.user = null;
  res.redirect('/')
});

module.exports = router;
