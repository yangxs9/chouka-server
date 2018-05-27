const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const logSchema = new Schema({
    type: { type: String, required: true },
    nickname: { type: String },
    ip: { type: String },
    agent: { type: String },
    time: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Log', logSchema);