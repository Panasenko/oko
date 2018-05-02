var mongoose = require('mongoose');
var Mon = mongoose.model('Monitoring');

var sendJSONresponse = function(res, status, content) {
    res.status(status);
    res.json({});
};

module.exports.getzabbix = function(req, res) {
    console.log('Finding location details', req.params);
    if (req.params) {
        Mon
            .find()
            .exec(function(err, location) {
                if (!location) {
                    sendJSONresponse(res, 404, {
                        "message": "locationid not found"
                    });
                    return;
                } else if (err) {
                    console.log(err);
                    sendJSONresponse(res, 404, err);
                    return;
                }
                console.log(location);
                sendJSONresponse(res, 200, {});
            });
    } else {
        console.log('No locationid specified');
        sendJSONresponse(res, 404, {
            "message": "No locationid in request"
        });
    }
};