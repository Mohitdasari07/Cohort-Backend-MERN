const mongoose = require("mongoose");

async function connectDB() {
    await mongoose.connect("mongodb+srv://md:Iegvm9n4usTz3x4j@yt-complete-backend.adzpbof.mongodb.net/project-1");
    console.log("DataBase Connected");
}

module.exports = connectDB;