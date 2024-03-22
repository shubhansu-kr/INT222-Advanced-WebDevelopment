const hello = async (req, res, next) =>{
    console.log(req, res);
    console.log("Logger Middleware");
    next();
}