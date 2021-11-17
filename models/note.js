const mongoose = require('mongoose');
const { Schema } = mongoose;

const NoteSchema = new Schema({
  al_nombre: { type: String, required: false },
  al_curso: { type: String, required: false },
  b1: { type: String, required: false },
  b2: { type: String, required: false },
  c1: { type: String, required: false },
  b3: { type: String, required: false },
  b4: { type: String, required: false },
  c2: { type: String, required: false }
  });

module.exports = mongoose.model('Note', NoteSchema);