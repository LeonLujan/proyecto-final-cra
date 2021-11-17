const express = require('express');
const router = express.Router();

// Note Model
const Note = require('../models/note');

// GET all Notes
router.get('/', async (req, res) => {
  const notes = await Note.find();
  res.json(notes);
});

// GET note by id
router.get('/:id', async (req, res) => {
  const note = await Note.findById(req.params.id);
  res.json(note);
});

// ADD a new note
router.post('/', async (req, res) => {
  const { al_nombre, al_curso, b1, b2, c1, b3, b4, c2 } = req.body;
  const note = new Note({al_nombre, al_curso, b1, b2, c1, b3, b4, c2});
  await note.save();
  res.json({status: 'Note Saved'});
});

// UPDATE a new note
router.put('/:id', async (req, res) => {
  const { al_nombre, al_curso, b1, b2, c1, b3, b4, c2 } = req.body;
  const newNote = {al_nombre, al_curso, b1, b2, c1, b3, b4, c2};
  await Note.findByIdAndUpdate(req.params.id, newNote);
  res.json({status: 'Note Updated'});
});

router.delete('/:id', async (req, res) => {
  await Note.findByIdAndRemove(req.params.id);
  res.json({status: 'Note Deleted'});
});

module.exports = router;