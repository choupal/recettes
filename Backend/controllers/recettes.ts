import express, { Response } from "express";
import RecetteModel from "../models/recette";
import mongoose from "mongoose";
import { MONGODB_URL } from "../utils/config";
import { Recettes } from "../types";

const router = express.Router();

mongoose.set("strictQuery", true);

// GET ALL RECETTES
router.get("/", async (_req, res: Response<Recettes>) => {
  // Connect To MongoDB
  await mongoose
    .connect(MONGODB_URL)
    // Retrieve & return data
    .then(async () => {
      console.log("Connected to MongoDB");
      const recettes: Recettes = await RecetteModel.find({});
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
    .catch((error: unknown) => {
      if (error instanceof Error) {
        console.log("Error connecting to MongoDB:", error.message);
      }
    });
});

export default router;
