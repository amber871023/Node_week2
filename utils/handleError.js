const headers = require('./headers');
const errorMsg = require('./errorMsg');

function handleError(res, msg = errorMsg.DEFAULT){
    res.writeHead(400,headers);
    res.write(JSON.stringify({
        "status": "false",
        "message": msg
    }));
    res.end();
}

module.exports = handleError;
