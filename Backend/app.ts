import express from "express";
import router from "./controllers/recettes";
import "express-async-errors";
import cors from "cors";

const app = express();

// APP SETUP
app.use(cors());
app.use(express.json());
app.use("/api/recettes", router);

// UPLOAD
// import upload from "./controllers/upload";
// app.use("/api/upload", upload);

export default app;
