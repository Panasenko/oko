var mongoose = require('mongoose');
var Mon = mongoose.model('Monitoring');


var sendJSONresponse = function(res, status, content) {
    res.status(status);
    res.json(content);
};

module.exports.getZabbix = function(req, res) {

    Mon.find().exec(function (err, zabbix) {
        console.log("result: " + zabbix);
        console.log("ошибка: " + err);
        sendJSONresponse(res, 200, zabbix);
    })

};