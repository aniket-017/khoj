const mongoose = require("mongoose");


const hostSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please Enter Your Name"],
        maxLength: [30, "Name cannot exceed 30 characters"],
        minLength: [4, "Name should have more than 4 characters"],
      },
      ContactNo: {
        type: String,
        required: [true, "Please Enter product ContactNo."],
        unique: true,
        match: [/^(\+?\d{1,3}[- ]?)?\d{10}$/, "Please enter a valid phone number"],
      },
      createdAt:{
        type: Date,
        default: Date.now,
      },

    });

    module.exports = mongoose.model("host", hostSchema);