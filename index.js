"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Every child will have just one thread available.
process.env.UV_THREADPOOL_SIZE = "1";
const crypto_1 = require("crypto");
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
app.get("/", (req, res) => {
    // Keep the server busy by 5 seconds - Block event loop
    (0, crypto_1.pbkdf2)("a", "b", 100000, 512, "sha512", () => {
        res.send("Hi there");
    });
});
app.get("/fast", (req, res) => {
    res.send("This was fast!");
});
app.listen(3000, () => {
    console.log("app running at port 3000");
});
