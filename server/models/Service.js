const mongoose = require("mongoose");

const serviceSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true,
        trim: true
    },
    description: {
        type: String,
        required: true
    }

})

module.exports = mongoose.model("Service", serviceSchema);