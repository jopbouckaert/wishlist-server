const mongoose = require('mongoose');

const WishSchema = mongoose.Schema({
    wish: String,
    received: Boolean
}, {
    timestamps: true
});

module.exports = mongoose.model('Wish', WishSchema);