import bodyParser from 'body-parser';
import cors from 'cors';
import { app } from './index';

app.use(cors())
app.use(bodyParser.json())

const PORT: number = 3000;

app.listen(PORT, () => {
    console.log('Server open!')
})