var mongoose = require('mongoose');
var Mon = mongoose.model('Monitoring');


var sendJSONresponse = function(res, status, content) {
    res.status(status);
    res.json(content);
};

module.exports.getZabbix = function(req, res) {
    sendJSONresponse(res, 200, {"status": "succsess"})
};