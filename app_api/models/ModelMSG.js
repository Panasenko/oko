var mongoose = require('mongoose');
//TODO: добавить проверку записи в БД, добавлене поддокументов и добавить индексацию по референсам
var monitoringSchema = new mongoose.Schema({
    "corezoid_conv_id": String,
    "corezoid_refTask": String,
    "SenderChat": String,
    "AlertFin": String,
    "AlertSt": String,
    "MsgSt": String,
    "MsgURL": String,
    "MsgId": {type: String, required: true},
    "MsgText": {type: String, required: true},
    "BusId": {type: String, required: true},
    "BusIdInf": {type: String, required: true},
    "Prior": {type: String, required: true},
    "history": [String]
});

mongoose.model('MsgMonitoring', monitoringSchema, 'msg');