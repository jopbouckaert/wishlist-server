const mongoose = require('mongoose');

const WishSchema = mongoose.Schema({
    wish_id: Number,
    wish: String,
    price: String,
    image: String,
    received: Boolean
}, {
    timestamps: true
});

module.exports = mongoose.model('Wish', WishSchema);