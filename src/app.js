import express from 'express';
import path from 'path';
import dotenv from 'dotenv';

import setGlobalMiddleware  from './middleware/setGlobalMiddleware';
import errorMiddleware from './middleware/errorMiddleware';
import dbConnect from './db';
import { genresAPI } from './api/genres';

dotenv.config();

const app = express();

setGlobalMiddleware(app);

dbConnect();

app.use('/api/genres', genresAPI);

app.use(errorMiddleware);

app.get('/*',(req,res) =>{
    res.sendFile(path.join(__dirname,'index.html'));
});

export default app;
