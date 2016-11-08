const Koa = require('koa');
const bodyParser = require('koa-bodyparser');
const cors = require('koa-cors');

const config = require('./globalConfig');
const router = require('./routers');

require('./models');

const app = new Koa();

app.use(cors());
app.use(bodyParser());
app.use(router);


app.listen(config.port);
console.log(`App start at port: ${config.port}.............`);
