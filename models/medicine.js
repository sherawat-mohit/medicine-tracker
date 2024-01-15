const mongoose = require("mongoose");

const MedicineSchema = new mongoose.model({
    name : {
        type:String,
        required: true
    },
    days : {
        type:Number,
        min:1,
        max:30,
        required : true
    },
    perday : {
        type:Number,
        min:1,
        max:3,
        required : true
    }
},
  {
    timestamps : true
}
);

const Medicine = mongoose.model("Medicine", MedicineSchema);

module.exports = Medicine;