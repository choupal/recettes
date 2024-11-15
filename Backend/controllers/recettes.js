const Recette = require("../models/recette.js");
const router = require("express").Router();
const config = require("../utils/config.js");

// MONGODB SETUP
const mongoose = require("mongoose");
mongoose.set("strictQuery", true);

// GET ALL RECETTES
router.get("/", async (req, res) => {
  // Connect To MongoDB
  await mongoose
    .connect(config.MONGODB_URL)
    // Retrieve & return data
    .then(async () => {
      console.log("Connected to MongoDB");
      const recettes = await Recette.find({});
      return res.json(recettes);
      // Disconnect from MongoDB
    })
    .then(
      async () =>
        await mongoose
          .disconnect()
          .then(() => console.log("Disconnected from MongoDB")),
    )
    // Error Handling
    .catch((error) => {
      console.log("Error connecting to MongoDB:", error.message);
    });
});

module.exports = router;
