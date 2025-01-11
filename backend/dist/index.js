"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
const express_1 = __importDefault(require("express"));
exports.app = (0, express_1.default)();
require("./server");
exports.app.get('/', (req, res) => {
    res.send('Ola');
});
exports.app.post('/location', (req, res) => {
    const { lat, lon } = req.body;
    if (!lat || !lon) {
        return res.status(400).json({ error: "Localização inválida!" });
    }
    res.status(200).json({ message: "Localização recebida com sucesso!" });
    console.log(`${lon} e ${lat}`);
});
