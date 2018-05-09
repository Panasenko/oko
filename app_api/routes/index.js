var express = require('express');
var router = express.Router();
var CtrlMon = require('../controllers/monitoring');

/* GET zabbix data. */
router.get('/zabbix', CtrlMon.getZabbix);

/* PUT zabbix data. */
router.post('/zabbix', CtrlMon.setZabbix);

module.exports = router;
