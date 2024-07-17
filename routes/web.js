const express = require('express');
const FrontController = require('../controllers/FrontController');
const route = express.Router();


route.get('/home', FrontController.home);

route.get('/about', FrontController.about);

route.get('/service', FrontController.service);

route.get('/contact', FrontController.contact);

route.get('/blog', FrontController.blog);

route.get('/hire', FrontController.hire);

route.get('/login', FrontController.login);

route.get('/register', FrontController.register);


//userinsert
route.post('/userInsert', FrontController.userinsert)
route.post('/verifyLogin', FrontController.verifyLogin)


module.exports = route;