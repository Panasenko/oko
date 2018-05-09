var mongoose = require('mongoose');

var monitoringSchema = new mongoose.Schema({
            "platform": Object,
            "status": String,
            "duration": String,
            "recoveryDate": String,
            "groups": String,
            "problem": String,
            "ip": String,
            "host": String,
            "eventId": String
});

mongoose.model('zabbixMonitoring', monitoringSchema, 'zabbix');