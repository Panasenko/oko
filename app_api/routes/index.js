var express = require('express');
var router = express.Router();
var CtrlMon = require('../controllers/monitoring');

/* GET home page. */
router.get('/', CtrlMon.getzabbix);

module.exports = router;
