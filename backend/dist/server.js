"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const body_parser_1 = __importDefault(require("body-parser"));
const cors_1 = __importDefault(require("cors"));
const index_1 = require("./index");
index_1.app.use((0, cors_1.default)());
index_1.app.use(body_parser_1.default.json());
const PORT = 3000;
index_1.app.listen(PORT, () => {
    console.log('Server open!');
});
