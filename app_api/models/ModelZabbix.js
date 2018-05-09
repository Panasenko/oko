var mongoose = require('mongoose');

var monitoringSchema = new mongoose.Schema({
   name: String,
   phone: String
});

mongoose.model('Monitoring', monitoringSchema, 'zabbix');