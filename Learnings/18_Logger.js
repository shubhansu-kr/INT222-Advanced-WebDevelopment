const morgan = require('morgan');
const logger = morgan('tiny');

app.use(logger);

morgan(':date[iso] :method :url :status :remote-addr');