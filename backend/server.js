import express from "express";
import bodyParser from "body-parser";
import cors from 'cors';
import fs from 'fs';
import swaggerUI from 'swagger-ui-express'
import swaggerJsDoc from 'swagger-jsdoc'
import swaggerDocument from './swagger/swagger.json' assert { type: "json" }

import productRoute from './routes/productRoutes.js'
import { assert } from "console";
import { type } from "os";


const app = express();
const port = 3000;  // server port

// middleware
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));

// access cross origin
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    next();
});

app.use(cors({
    origin:'http://localhost:3001',
  }))

// Api route
app.use('/api',productRoute)

// Simple route
app.get('/',(req, res) => res.send('Lodded!!!'))

// Swagger API route
app.use('/api/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDocument))

//start server
app.listen(port, ()=>{
    console.log(`listeniing at port: http://localhost:${port}`)
}) 

