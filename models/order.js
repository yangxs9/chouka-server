const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const orderSchema = new Schema({
    pro_id: { type: String, required: true },
    user_id: { type: String, required: true },
    nickname: { type: String, required: true },
    backer_money: { type: Number, required: true },
    time: { type: String, required: true },
    cards: { type: Array, required: true }
});

module.exports = mongoose.model('Order', orderSchema);