const { Timestamp } = require("mongodb");
const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true,
        trim: true
    },
    description: {
        type: String,
        require: true,
        
    },
    image: {
        type: String,
        require: true
    },
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category',
        require: true
    },
    price: {
    type: Number,
    default: 0
  }
    }, { Timestamp: true}
)
module.exports = mongoose.model('Product', productSchema);