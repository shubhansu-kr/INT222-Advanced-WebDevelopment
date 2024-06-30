const errorMiddleWare = async (err, req, res, next) => {
    console.log('error Middleware Called');
    console.log('\n');
    console.error(err.stack);
    console.log('\n');
    res.status(500).send('This response is sent from errorMiddleware');
}

module.exports = errorMiddleWare;