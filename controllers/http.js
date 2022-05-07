const headers = require('../utils/headers');
const errorMsg = require('../utils/errorMsg');

const httpControllers = {
  cors(req, res){
    res.writeHead(200, headers);
    res.end();
  },
  notFound(req, res){
    res.writeHead(404, headers);
    res.write(JSON.stringify({
      "status": "false",
      "message": errorMsg.NOT_FOUND
    }));
    res.end();
  }
}

module.exports = httpControllers;
