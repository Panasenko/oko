var express = require('express');
var router = express.Router();
var CtrlMon = require('../controllers/controllerZabbix');
var CtrlNag = require('../controllers/controllerNagios');

/* GET zabbix data. */
router.get('/zabbix', CtrlMon.getZabbix);
/* Post zabbix data. */
router.post('/zabbix', CtrlMon.setZabbix);

/* GET Nagios data. */
router.get('/nagios', CtrlNag.getNagios);
/* Post Nagios data. */
router.post('/nagios', CtrlNag.setNagios);

module.exports = router;
