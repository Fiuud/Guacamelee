var express = require('express');
var router = express.Router();

  
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


/* Страница Хуан */

router.get('/juan', function(req, res, next) {
  res.render('hero', {
  title: "Хуан Агуакате",
  picture: "images/juan.jpg",
  desc: "фермер, выращивающий агаву в Пуэлучо, который, узнав о похищении своего друга детства и дочери президента Лупиты, преследует Карлоса Калаку и его приспешников. Получив Маску, чтобы стать Лучадором, он путешествует по землям, по пути обучаясь у Уай Чиво."
  });
});
  
/* Страница Тостада */
router.get('/tostada', function(req, res, next) {
  res.render('hero', {
  title: "Тостада",
  picture: "images/tostada.jpg",
  desc: "второстепенный герой в Guacamelee! и его продолжение, и за нее можно играть, когда Игрок 2 отмечен или самостоятельно через Магазин костюмов."
  });
});
/* Страница Калака */
router.get('/calaka', function(req, res, next) {
  res.render('hero', {
  title: "Калака",
  picture: "images/calaka.jpg",
  desc: "Калака раньше был человеком, как «величайший чарро, который когда-либо жил», пока он не сломал руку перед своим самым большим соревнованием чарреда. Он продал душу дьяволу, чтобы вылечить руку и выиграть соревнование. В конце концов он так и сделал, но умер, не успев принять свой трофей."
  });
});


module.exports = router;
