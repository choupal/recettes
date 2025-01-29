const mongoose = require("mongoose");

const recetteSchema = new mongoose.Schema({
  nom: String,
  preparation: Number,
  cuisson: Number,
  personnes: Number,
  ingredients: Array,
  directives: Array,
  type: String,
});

// Manage MongoDB Default id property
// Change the "_id" to "id" && remove the version "_v"
recetteSchema.set("toJSON", {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});

module.exports = mongoose.model("Recette", recetteSchema);
