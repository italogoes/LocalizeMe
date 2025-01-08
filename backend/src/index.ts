import express from 'express';
export const app = express()
import './server'

app.get('/', (req, res) => {
    res.send('Ola')
});