const express = require("express");
const noteModel = require("./model/note.model");
const app = express();
app.use(express.json());

app.post("/notes", async (req, res) => {
  const data = req.body;
  await noteModel.create({
    name: data.name,
    city: data.city,
  });
  res.status(201).json({
    message: "Note Created",
  });
});

app.get("/notes", async (req, res) => {
  const notes = await noteModel.find();
  res.status(201).json({
    message: "Notes Fetched Done",
    notes: notes,
  });
});

app.delete("/notes/:id", async (req, res) => {
  const id = req.params.id;
  await noteModel.findOneAndDelete({
    _id: id,
  });
  res.status(201).json({
    message: "Note is Deleted",
  });
});

app.patch("/notes/:id", async (req, res) => {
  const id = req.params.id;
  const city = req.body.city;
  await noteModel.findOneAndUpdate(
    {
      _id: id,
    },
    {
      city: city,
    },
  );
  res.status(201).json({
    message: "Note Updated",
  });
});
module.exports = app;
