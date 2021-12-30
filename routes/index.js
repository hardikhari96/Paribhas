const express = require('express');
const app = express();
const path = require('path');
const routes = require(path.join(__dirname,'./routes'));

app.use(require(path.join(__dirname,'../middlewares/middleware')).global);
app.use('/',express.static(path.join(__dirname,'../public/dist')));
app.use('/data',express.static(path.join(__dirname,'../public/storage')));
app.use('/',routes);

module.exports = app;