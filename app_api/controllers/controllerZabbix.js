var mongoose = require('mongoose');
var Mon = mongoose.model('zabbixMonitoring');


var sendJSONresponse = function(res, status, content) {
    res.status(status);
    res.json(content);
};

module.exports.getZabbix = function(req, res) {
    Mon
       .find()
       .exec(function (err, zabbix) {
           if(!zabbix){
               sendJSONresponse(res, 404, {"massage": "Event not found"});
               return;
           } else if (err){
               sendJSONresponse(res, 404, err);
               return;
           }
            sendJSONresponse(res, 200, zabbix);
        })
};

module.exports.setZabbix = function(req, res) {
    Mon.create({
        "platform": req.body.platform,
        "status": req.body.status,
        "duration": req.body.duration,
        "recoveryDate": req.body.recoveryDate,
        "groups": req.body.groups,
        "problem": req.body.problem,
        "ip": req.body.ip,
        "host": req.body.host,
        "eventId": req.body.eventId
    }, function (err, zabbix){
        if (err) {
            sendJSONresponse(res, 400, err);
        } else {
            sendJSONresponse(res, 401, zabbix);
        }
    })
};