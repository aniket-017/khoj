const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please Enter product Name"],
    trim: true,
  },
  Address: {
    type: String,
    required: [true, "Please Enter product Address"],
  },
  LightFacility: {
    type: String,
    // required: [true, "Please Enter product lightFacilty"],
  },
  WifiFacility: {
    type: String,
    // required: [true, "Please Enter product WifiFacility"],
  },
  NoOfRoomsVacant : {
    type: Number,
    required: [true, "NoOfRooms Vacacant"],
  },
  SolarHeater : {
    type: String,
    // required: [true, "Solar Heater is Present or not"],
  },
  NoOFStudents: {
    type: String,
    required: [true, "NO of student per room"],
  },
  Capacitiy: {
    type: String,
    required: [true, "Capacity of hostel"],
  },
  MessFacility: {
    type: String,
    // required: [true, "Mess compulsary"],
  },
  InOutTime: {
    type: String,
    // required: [true, "Please Enter product IN out Timing"],
  },
  ContactNo: {
    type: String,
    required: [true, "Please Enter product ContactNo."],
  },
  OtherFacility: {
    type: String,
  },
  price: {
    type: Number,
    required: [true, "Please Enter product Price"],
    maxLength: [8, "Price cannot exceed 8 characters"],
  },
  ratings: {
    type: Number,
    default: 0,
  },
  images: [
    {
      public_id: {
        type: String,
        required: true,
      },
      url: {
        type: String,
        required: true,
      },
    },
  ],
  category: {
    type: String,
    required: [true, "Please Enter Product Category"],
  },
  Stock: {
    type: Number,
    required: [true, "Please Enter product Stock"],
    maxLength: [4, "Stock cannot exceed 4 characters"],
    default: 1,
  },
  numOfReviews: {
    type: Number,
    default: 0,
  },
  reviews: [
    {
      name: {
        type: String,
        required: true,
      },
      rating: {
        type: Number,
        required: true,
      },
      comment: {
        type: String,
        required: true,
      }
    }
  ],

  user:{
    type: mongoose.Schema.ObjectId,
    ref:"User",
    required:true
  },

  createdAt: {
    type: Date,
    default: Date.now,
  }
});

module.exports = mongoose.model("Product", productSchema);