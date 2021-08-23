const mongoose = require("mongoose");
const Plant = require("../models/plant");
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

const seedDB = async () => {
  await Plant.deleteMany({});
  const peaceLily = new Plant({
    name: "Peace Lily",
    family: "Araceae",
    kingdom: "Plantae",
    description: `Spathiphyllum is a genus of about 47 species of monocotyledonous flowering plants in the family Araceae, native to tropical regions of the Americas and southeastern Asia. Certain species of Spathiphyllum are commonly known as spath or peace lilies.`,
    image: `https://images.unsplash.com/photo-1616694547693-b0f829a6cf30?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2134&q=80`,
  });
  await peaceLily.save();
  const bamboo = new Plant({
    name: "Bamboo",
    family: "Poaceae",
    kingdom: "Plantae",
    description: `Bamboos are a diverse group of evergreen perennial flowering plants in the subfamily Bambusoideae of the grass family Poaceae. The origin of the word "bamboo" is uncertain, but it probably comes from the Dutch or Portuguese language, which originally borrowed it from Malay or Kannada.`,
    image: `https://images.unsplash.com/photo-1540999758994-161f2ee6e1c8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2246&q=80`,
  });
  await bamboo.save();
  const stringOfBananas = new Plant({
    name: "String of Bananas",
    family: "Asteraceae",
    kingdom: "Plantae",
    description: `Curio rowleyanus, syn. Senecio rowleyanus, is a flowering plant in the daisy family Asteraceae. It is a creeping, perennial, succulent vine native to the drier parts of southwest Africa. In its natural environment its stems trail on the ground, rooting where they touch and forming dense mats`,
    image: `https://www.thespruce.com/thmb/7a8a8o2h2OQDH2JSNPjFGd8ckag=/960x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/growing-string-of-bananas-plants-5089192-5-574ba83b495541de82088826e4ff33e2.jpg`,
  });
  await stringOfBananas.save();
  const pothos = new Plant({
    name: "Pothos",
    family: "Araceae",
    kingdom: "Plantae",
    description: `Epipremnum aureum is a species in the arum family Araceae, native to Mo'orea in the Society Islands of French Polynesia.`,
    image: `https://images.unsplash.com/photo-1586883573403-cb7ee339755b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80`,
  });
  await pothos.save();
  const wanderingJew = new Plant({
    name: "Inchplant",
    family: "Commelinaceae",
    kingdom: "Plantae",
    description: `Tradescantia zebrina, formerly known as Zebrina pendula, is a species of spiderwort commonly known as an inch plant. It is colloquially known as a "Wandering Dude". The common name is shared with closely related species T. fluminensis and T. pallida.`,
    image: `https://thecitywild.com/wp-content/uploads/2021/05/Tradescantia-zebrina_456055831.jpeg`,
  });
  await wanderingJew.save();
};

seedDB().then(() => {
  mongoose.connection.close();
});
