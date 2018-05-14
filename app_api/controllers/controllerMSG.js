var mongoose = require('mongoose');
var MSGMon = mongoose.model('MsgMonitoring');

var sendJSONresponse = function(res, status, content) {
    res.status(status);
    res.json(content);
};

module.exports.getMSG = function(req, res) {
    MSGMon
        .find()
        .exec(function (err, msg) {
            if(!msg){
                sendJSONresponse(res, 404, {"massage": "Event not found"});
                return;
            } else if (err){
                sendJSONresponse(res, 404, err);
                return;
            }
            sendJSONresponse(res, 200, msg);
        })
};

module.exports.setMSG = function(req, res) {
    MSGMon
        .findOne({"MsgId": req.body.MsgId})
        .exec(function (err, msg) {
            if(!msg){
                console.log("Выполнилось добавление");
                createMSG(req, res);
                return;
            } else if (err){
                sendJSONresponse(res, 404, err);
                return;
            }

            console.log("Выполнилось обновление");
            msg.Prior = req.body.Prior;
            msg.MsgSt = req.body.MsgSt;
            msg.AlertFin = req.body.AlertFin;
            msg.AlertSt = req.body.AlertSt;

            msg.save({
                "AlertFin": req.body.AlertFin,
                "AlertSt": req.body.AlertSt,
                "MsgSt": req.body.MsgSt,
                "Prior": req.body.Prior
            }, function (err, msg){
                if (err) {
                    sendJSONresponse(res, 400, err);
                } else {
                    sendJSONresponse(res, 401, msg);
                }
            })
        })
};


var createMSG = function (req, res) {
    MSGMon.create({
        "corezoid_conv_id": req.body.corezoid_conv_id,
        "corezoid_refTask": req.body.corezoid_refTask,
        "AlertFin": req.body.AlertFin,
        "AlertSt": req.body.AlertSt,
        "MsgSt": req.body.MsgSt,
        "MsgURL": req.body.MsgURL,
        "MsgId": req.body.MsgId,
        "MsgText": req.body.MsgText,
        "BusId": req.body.BusId,
        "BusIdInf": req.body.BusIdInf,
        "Prior": req.body.Prior
    }, function (err, msg){
        if (err) {
            sendJSONresponse(res, 400, err);
        } else {
            sendJSONresponse(res, 401, msg);
        }
    })
}
