const express = require("express");
const multer = require("multer");
const uploadFile = require("./service/storage.service");

const upload = multer({ storage: multer.memoryStorage() });
const app = express();
app.use(express.json());

app.post("/create", upload.single("image"), async (req, res) => {
  console.log(req.body);
  console.log(req.file);

  const result = await uploadFile(req.file.buffer);

  console.log(result);

  res.status(201).json({
    message: "Done....",
  });
});

module.exports = app;
