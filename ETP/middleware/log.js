const logReqMiddleWare = async (req, res, next) => {
    console.log('Logger Middleware: ', req.url);
    next();
}

module.exports = logReqMiddleWare;