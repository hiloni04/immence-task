const mongoose = require("mongoose")

const UserSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        trim: true,
      },
      lastName: {
        type: String,
        required: true,
        trim: true,
      },
      email: {
        type: String,
        required: true,
        unique: true,
        validate: {
          validator: function (email) {
            return /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(email);
          },
          message: 'Email format is invalid',
        },
      },
      phoneNumber: {
        type: String,
        required: true,
        validate: {
          validator: function (phoneNumber) {
            return /^[0-9]{10}$/.test(phoneNumber);
          },
          message: 'Phone number format is invalid',
        },
      },
    });


module.exports = mongoose.model("User", UserSchema);