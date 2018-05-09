var mongoose = require('mongoose');

var monitoringSchema = new mongoose.Schema({
    "corezoid_conv_id": String,
    "corezoid_refTask": String,
    "SenderChat": String,
    "AlertFin": String,
    "AlertSt": String,
    "MsgSt": String,
    "MsgURL": String,
    "MsgId": String,
    "MsgText": String,
    "BusId": String,
    "BusIdInf": String,
    "Prior": String
});

mongoose.model('MsgMonitoring', monitoringSchema, 'msg');