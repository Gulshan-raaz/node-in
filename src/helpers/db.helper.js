const mongoose = require('mongoose');

module.exports.connect = () => mongoose.connect('mongodb+srv://gulu:1234@cluster0.m5ifb8t.mongodb.net/test');
module.exports.disconnect = () => mongoose.disconnect();