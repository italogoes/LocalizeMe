import express, {Request, Response} from 'express';
export const app = express()
import './server'
import ILocation from './interfaces/location';

let data: number[] = [];

app.get('/location', (req, res) => {
    res.send(data)
});

app.post('/location', (req: Request, res: Response): any => {
    const { latitude, longitude } = req.body;

    if(!latitude || !longitude){
        return res.status(400).json({ error: "Localização inválida!"})
    }
    
    res.status(200).json({ message: "Localização recebida com sucesso!" })
    data = []
    data.push(latitude)
    data.push(longitude)
    console.log(data)
})