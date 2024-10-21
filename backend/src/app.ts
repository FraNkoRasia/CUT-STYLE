import express, { Application, Request, Response } from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';

import barbershopRoutes from './routes/barbershop.routes';

dotenv.config();

const app: Application = express();
const port = process.env.APP_PORT || 9001;


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/ping', (req: Request, res: Response) => {
    res.send('pong 🏓');
});

app.use('/api/v1', barbershopRoutes);


app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});