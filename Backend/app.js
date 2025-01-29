const express = require("express");
require("express-async-errors");
const app = express();
const cors = require("cors");
// const path = require("path");
// const rootRouter = express.Router();
const router = require("./controllers/recettes.js");

// APP SETUP
app.use(cors());
app.use(express.json());
app.use("/api/recettes", router);

// UPLOAD
// const upload = require("./controllers/upload.js");
// app.use("/api/upload", upload);

// MANAGE UI
// const buildPath = path.normalize(path.join(__dirname, "./UI"));
// app.use(express.static(buildPath));
// rootRouter.get("(/*)?", async (req, res, next) => {
//   res.sendFile(path.join(buildPath, "index.html"));
// });
// app.use(rootRouter);

module.exports = app;
