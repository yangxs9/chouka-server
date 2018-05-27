const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const cardSchema = new Schema({
    card_id: { type: String, required: true },
    name: { type: String, required: true },
    level: { type: String, required: true },
    type: { type: String, required: true },
    description: { type: String, required: true },
    status: { type: String, required: true }
});

module.exports = mongoose.model('Lsn_card', cardSchema);