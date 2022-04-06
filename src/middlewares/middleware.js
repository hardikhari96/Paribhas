module.exports.global=[
    require('./crossorigin.middlewares'), // cross origin 
    require('express').json()  // access body data
];
module.exports.one = {
    userauth:require('./userauth.middleware'),
}