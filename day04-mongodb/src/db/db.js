const mongoose = require("mongoose");

async function connectDB() {
  await mongoose.connect(
    "mongodb+srv://md:Iegvm9n4usTz3x4j@yt-complete-backend.adzpbof.mongodb.net/halley",
  );

  console.log("Connect to DB");
}

module.exports = connectDB;
