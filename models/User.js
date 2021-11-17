const mongoose = require('mongoose');
const { Schema } = mongoose;

const UserSchema = new Schema({
  nombre: {type: String, required: true},
  apellido: {type: String, required: true},
  email: {type: String, required: true},
  contraseña: {type: String, required: true}
  });

module.exports = mongoose.model('Note', UserSchema);