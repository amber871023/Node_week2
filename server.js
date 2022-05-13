const http = require('http');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const routes = require('./routes');

dotenv.config({path: './config.env'});
const DB = process.env.DATABASE.replace(
  '<password>',
  process.env.DATABASE_PASSWORD
);

mongoose
  .connect(DB)
  .then(() => console.log('資料庫成功連結'))
  .catch(err => console.log(err))

const requestListener = async (req, res) => {
  routes(req, res);
}

const server = http.createServer(requestListener);
server.listen(process.env.PORT);
