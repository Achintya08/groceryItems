const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const studentSchema = new Schema({
    groceryItems:{
        type: String,
        required: true
    },
    isPurchased:{
        type: Boolean,
        default:false
    }
},
{collection: "groceryList"}
);

exports.Grocery = mongoose.model("groceryList", studentSchema );

