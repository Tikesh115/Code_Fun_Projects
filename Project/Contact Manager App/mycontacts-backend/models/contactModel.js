const mongoose = require("mongoose");

const contactSchema = mongoose.Schema({
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "User", //reference to the User model
    },
    name: {
        type: String,
        required: [true, "Please add the contact name"],
    },
    email: {
        type: String,
        required: [true, "Please add the contact email address"],
    },
    phone: {
        type: String,
        required: [true, "Please add the contact phone number"],
    },
}, 
{
    timestamps: true,   //adds createdAt and updatedAt fields to the schema
}); //schema for contact model

module.exports = mongoose.model("Contacts", contactSchema);