var mongoose = require('mongoose');
//TODO: добавить проверку записи в БД, добавлене поддокументов и добавить индексацию по референсам

var historySchema = new mongoose.Schema({
    "MsgSt": {type: String, required: true},
    "MsgURL": {type: String, required: true},
    "MsgId": {type: String, required: true},
    "MsgText": {type: String, required: true},
    "BusId": {type: String, required: true},
    "BusIdInf": {type: String, required: true}
});

//TODO: проверить соответствие все полей объекта
var monitoringSchema = new mongoose.Schema({
    "corezoid_conv_id": String,
    "corezoid_refTask": String,
    "SenderChat": String,
    "AlertFin": String,
    "AlertSt": String,
    "MsgSt": {type: String, required: true},
    "MsgURL": {type: String, required: true},
    "MsgId": {type: String, required: true},
    "MsgText": {type: String, required: true},
    "BusId": {type: String, required: true},
    "BusIdInf": {type: String, required: true},
    "history": [historySchema]
});

mongoose.model('MsgMonitoring', monitoringSchema, 'msg');