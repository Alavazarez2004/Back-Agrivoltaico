import express, { Express } from 'express';
import cors from 'cors'; // Importar cors
import 'dotenv/config';
import indexRouter from './index.router';

const app: Express = express();
const port = process.env.PORT || 3000;

// Configurar CORS
app.use(cors({
  origin: 'http://localhost:5173', // URL de tu frontend, ajusta según sea necesario
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type'],
}));

app.use(express.json());

app.use(indexRouter);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
