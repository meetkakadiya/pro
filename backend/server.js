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
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);


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
app.use(express.static(__dirname));

// app.get("/*", function(req, res) {
//   res.sendFile(path.join(__dirname, "index.html"));
// });

app.use(cors({
    origin:'http://localhost:3001',
  }))

app.use(express.static(__dirname));

// app.get("/*", function(req, res) {
//     res.sendFile(path.join(__dirname, "index.html"));
//   });

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

