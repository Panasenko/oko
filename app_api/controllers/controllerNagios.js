var mongoose = require('mongoose');
var NagMon = mongoose.model('nagiosMonitoring');


var sendJSONresponse = function(res, status, content) {
    res.status(status);
    res.json(content);
};

module.exports.getNagios = function(req, res) {
    NagMon
       .find()
       .exec(function (err, nagios) {
           if(!nagios){
               sendJSONresponse(res, 404, {"massage": "Event not found"});
               return;
           } else if (err){
               sendJSONresponse(res, 404, err);
               return;
           }
            sendJSONresponse(res, 200, nagios);
        })
};

module.exports.setNagios = function(req, res) {
    NagMon.create({
        "status": req.body.status,
        "configurationItem": req.body.configurationItem,
        "priority": req.body.priority,
        "category": req.body.category,
        "workGroup": req.body.workGroup,
        "id": req.body.id,
        "created": req.body.created,
        "deadline": req.body.deadline,
        "description": req.body.description,
        "information": req.body.information
    }, function (err, nagios){
        if (err) {
            sendJSONresponse(res, 400, err);
        } else {
            sendJSONresponse(res, 401, nagios);
        }
    })
};