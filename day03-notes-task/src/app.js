const express = require("express");

const app = express();
app.use(express.json());

const notes = [];


// Create Note
app.post("/notes", (req, res) => {
  notes.push(req.body);

  res.status(201).json({
    message: "note created sucessfully",
  });
});


// Read Note
app.get("/notes", (req, res) => {
  res.status(200).json({
    message: "Code Chal Gaya Bhai",
    notes: notes,
  });
});


// Delete Note
app.delete("/notes/:index", (req, res) => {
  const index = req.params.index;

  delete notes[index];

  res.status(200).json({
    message: "Note Delete Ho Gya !!!",
  });
});


// Update Note
app.patch("/notes/:index", (req, res) => {
  const index = req.params.index;
  const title = req.body.title;
  const description = req.body.description;

  notes[index].title = title;
  notes[index].description = description;

  res.status(200).json({
    message: "Note Updated Sucessfully...",
  });
});

module.exports = app;
