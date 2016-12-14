var timeslot = require('./models/timeslot');

function getTimeSlot(req, res) {
    timeslot.find(function (err, timeSlot) {
        if (err) {
            res.send(err);
        }
        res.json(timeSlot);
    });
};


module.exports = function (app) {
    app.get('/api/timeslot', function (req, res) {
        getTimeSlot(req, res);
    });

    app.put('/api/timeslot/:id', function (req, res) {
        timeslot.findById(req.params.id, function(err, resData) {
            if (!resData) {
                res.send(new Error());
            } else {
                resData.isBooked = req.body.isBooked;
                resData.firstName = req.body.firstName;
                resData.lastName = req.body.lastName;
                resData.phoneNumber = req.body.phoneNumber;

                resData.save(function(err) {
                    if (err) {
                        res.send(err);
                    } else {
                        res.send();
                    }
                });
            }
        });
    });

    app.get('*', function (req, res) {
        res.sendFile(__dirname + '/public/index.html');
    });
};
