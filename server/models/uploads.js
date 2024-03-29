const mongoose = require("mongoose");

const uploadsSchema = mongoose.Schema({
  name: { type: String, required: true },
  imagePath: { type: String, required: true },
});

module.exports = mongoose.model("Uploads", uploadsSchema);