const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    user_id: { type: String, required: true },
    nickname: { type: String, required: true },
    backer_money: { type: Number, required: true },
    used: { type: Number, required: true },
    cards: { type: Array, required: true }
});

module.exports = mongoose.model('Lsn_user', userSchema);