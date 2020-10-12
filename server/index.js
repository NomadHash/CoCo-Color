const express = require("express");
const app = express();
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();

// Connect Mongo DB

const mongoose = require("mongoose");
const connect = mongoose
  .connect(process.env.DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then(() => console.log("MongoDB Connected!"))
  .catch((err) => console.log(err));

// Mongo-DB Table
const { Palette } = require("./models/Palette");
app.use(cors());

// Body-parser
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Server listen
const port = process.env.PORT;
app.listen(port || 5000, () => console.log(`Express Server on PORT ${port}`));

// REST-ROUTE

app.get("/api", (req, res) => {
  console.log("LOAD_COLOR_PALETTE");
  Palette.find({}, function (err, result) {
    if (err) return console.log(err);
    res.send(result);
  });
});

app.put("/api/Pallette/:palettId", function (req, res) {
  Palette.update({ _id: req.params.palettId }, { $set: req.body }, function (
    err,
    output
  ) {
    if (err) res.status(500).json({ error: "database failure" });
    console.log(output);
    if (!output.n) return res.status(404).json({ error: "book not found" });
    res.json({ message: "book updated" });
  });
});
