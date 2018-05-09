var mongoose = require('mongoose');

var monitoringSchema = new mongoose.Schema({
    "status": Object,
    "configurationItem": Object,
    "priority": Object,
    "category": Object,
    "workGroup": Object,
    "id": String,
    "created": String,
    "deadline": String,
    "description": String,
    "information": String
});

mongoose.model('nagiosMonitoring', monitoringSchema, 'nagios');