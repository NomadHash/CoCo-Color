const mongoose = require("mongoose");

const paletteSchema = mongoose.Schema({
  color1: {
    type: String,
    maxlength: 7,
  },
  color2: {
    type: String,
    maxlength: 7,
  },
  color3: {
    type: String,
    maxlength: 7,
  },
  color4: {
    type: String,
    maxlength: 7,
  },
  colorCategory: {
    type: String,
    maxlength: 5,
  },
  likes: {
    type: Number,
    maxlength: 1000,
  },
});

const Palette = mongoose.model("Palette", paletteSchema);

module.exports = { Palette };
