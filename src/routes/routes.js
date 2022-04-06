const express = require('express');
const routes = express.Router();


// user controller route manage
const userController = require('../controllers/user/user.controller')();
routes.post('/user/create',userController.create);
routes.get('/',userController.test);



module.exports = routes;