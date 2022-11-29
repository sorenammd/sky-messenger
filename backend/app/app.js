const express = require('express');

const app = express();

require('./boot')(app);
require('./middlewares')(app);
require('./router')(app);

const startApp = () => {

    app.listen(process.env.APP_PORT, () => {
        console.log('messenger is running ...');
    });

}

module.exports = startApp;