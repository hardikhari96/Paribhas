module.exports = function(req, res, next) {
    //Enabling CORS
    res.header("x-powered-by", "Harikrushna");
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, contentType,Content-Type, Accept, Authorization"
    );
    next();
}