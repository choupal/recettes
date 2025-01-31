"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const recettes_1 = __importDefault(require("./controllers/recettes"));
require("express-async-errors");
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
// APP SETUP
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use("/api/recettes", recettes_1.default);
// UPLOAD
// import upload from "./controllers/upload";
// app.use("/api/upload", upload);
exports.default = app;
