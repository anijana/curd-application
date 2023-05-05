import express from 'express';
import Connection from './database/db.js';
import dotenv from 'dotenv';
import router from './routes/route.js';
import cors from 'cors';
import bodyparser from 'body-parser';

const app = express();

const PORT = process.env.PORT || 8000;

dotenv.config();

app.use(bodyparser.json({extended: true}));
app.use(bodyparser.urlencoded({extended: true}));

app.use(cors());

app.use('/',router);

const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;

Connection(username,password);

app.listen(PORT,()=>{
    console.log(`server is running successfully on ${PORT}`);
})