"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MONGODB_URL = exports.PORT = void 0;
require("dotenv/config");
exports.PORT = process.env.PORT || 3000;
exports.MONGODB_URL = process.env.MONGODB || "";
