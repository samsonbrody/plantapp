const express = require("express");
const app = express();
const ejsMate = require("ejs-mate");
const path = require("path");
const methodOverride = require("method-override");
const Plant = require("./models/plant");
const { findByIdAndDelete } = require("./models/plant");
const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/myPlants", {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on("error", console.error.bind("connection error"));
db.once("open", () => {
  console.log("database connected");
});

app.engine("ejs", ejsMate);
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.get("/", (req, res) => {
  res.render("plants/home");
});

app.get("/plants", async (req, res) => {
  const allPlants = await Plant.find({});
  res.render("plants/index", { allPlants });
});
app.get("/plants/new", (req, res) => {
  res.render("plants/new");
});

app.get("/plants/:id", async (req, res) => {
  const { id } = req.params;
  const foundPlant = await Plant.findById(id);
  res.render("plants/show", { foundPlant });
});

app.get("/plants/:id/edit", async (req, res) => {
  const { id } = req.params;
  const foundPlant = await Plant.findById(id);
  res.render("plants/edit", { foundPlant });
});

app.put("/plants/:id", async (req, res) => {
  const { id } = req.params;
  const plant = await Plant.findByIdAndUpdate(id, { ...req.body.plant });
  console.log(plant.name, plant._id);
  res.redirect(`/plants/${plant._id}`);
});
app.post("/plants", async (req, res) => {
  const plant = new Plant(req.body.plant);
  await plant.save();
  res.redirect("/plants");
});

app.delete("/plants/:id", async (req, res) => {
  await Plant.findByIdAndDelete(req.params.id);
  res.redirect("/plants");
});

app.listen(3000, () => {
  console.log("plants are live on 3000!");
});
