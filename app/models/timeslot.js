var mongoose = require('mongoose');

module.exports = mongoose.model('timeslot', {
    timeslot: String,
    isBooked: Boolean,
    firstName: String,
    lastName: String,
    phoneNumber: String
});