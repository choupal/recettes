"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const recetteSchema = new mongoose_1.Schema({
    nom: {
        type: String,
        required: true,
    },
    preparation: {
        type: Number,
        required: true,
    },
    cuisson: {
        type: Number,
        required: true,
    },
    personnes: {
        type: Number,
        required: true,
    },
    ingredients: {
        type: [String],
        required: true,
    },
    directives: {
        type: [String],
        required: true,
    },
    type: {
        type: String,
        required: true,
    },
});
// Manage MongoDB Default id property
// Change the "_id" to "id" && remove the version "_v"
recetteSchema.set("toJSON", {
    transform: (_document, returnedObject) => {
        returnedObject.id = returnedObject._id.toString();
        delete returnedObject._id;
        delete returnedObject.__v;
    },
});
exports.default = (0, mongoose_1.model)("Recette", recetteSchema);
