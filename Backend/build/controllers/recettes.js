"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const recette_1 = __importDefault(require("../models/recette"));
const mongoose_1 = __importDefault(require("mongoose"));
const config_1 = require("../utils/config");
const router = express_1.default.Router();
mongoose_1.default.set("strictQuery", true);
// GET ALL RECETTES
router.get("/", (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // Connect To MongoDB
    yield mongoose_1.default
        .connect(config_1.MONGODB_URL)
        // Retrieve & return data
        .then(() => __awaiter(void 0, void 0, void 0, function* () {
        console.log("Connected to MongoDB");
        const recettes = yield recette_1.default.find({});
        return res.json(recettes);
        // Disconnect from MongoDB
    }))
        .then(() => __awaiter(void 0, void 0, void 0, function* () {
        return yield mongoose_1.default
            .disconnect()
            .then(() => console.log("Disconnected from MongoDB"));
    }))
        // Error Handling
        .catch((error) => {
        if (error instanceof Error) {
            console.log("Error connecting to MongoDB:", error.message);
        }
    });
}));
exports.default = router;
