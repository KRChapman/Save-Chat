const mongoose = require('mongoose');

const collection = 'User';

let UserSchema = new mongoose.Schema({
  userName: {
    type: String,
    required: true,
    trim: true,

    minlength: 1,
       unique: true,
  },

  password: {
    type: String,
    required: true,
    minlength: 1
  }
}, { collection });


let User = mongoose.model(collection, UserSchema);
module.exports = { User };