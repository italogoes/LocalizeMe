"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
const express_1 = __importDefault(require("express"));
exports.app = (0, express_1.default)();
require("./server");
let data = [];
exports.app.get('/location', (req, res) => {
    res.send(data);
});
exports.app.post('/location', (req, res) => {
    const { latitude, longitude } = req.body;
    if (!latitude || !longitude) {
        return res.status(400).json({ error: "Localização inválida!" });
    }
    res.status(200).json({ message: "Localização recebida com sucesso!" });
    data = [];
    data.push(latitude);
    data.push(longitude);
    console.log(data);
});
