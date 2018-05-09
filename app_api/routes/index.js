var express = require('express');
var rest = require('connect-rest');
var router = express.Router();

var CtrlMon = require('../controllers/controllerZabbix');
var CtrlNag = require('../controllers/controllerNagios');
var CtrlMSG = require('../controllers/controllerMSG');

//TODO: добавить PUT и DELETE запросы с логикой обновления документов
/* GET zabbix data. */
router.get('/zabbix', CtrlMon.getZabbix);
/* Post zabbix data. */
router.post('/zabbix', CtrlMon.setZabbix);

/* GET Nagios data. */
router.get('/nagios', CtrlNag.getNagios);
/* Post Nagios data. */
router.post('/nagios', CtrlNag.setNagios);

/* GET Nagios data. */
router.get('/msg', CtrlMSG.getMSG);
/* Post Nagios data. */
router.post('/msg', CtrlMSG.setMSG);

module.exports = router;
