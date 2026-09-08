const express = require("express");

const app = express();
app.get("/", (req, res) => {
  res.send("Jay Diporam  Aadhar Mari Dipo");
});

app.listen(3000);
