// * Base
const express = require('express');
const serverless = require('serverless-http');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();
const path = require('path');

// * Constants
const DEV = process.env.DEVELOPMENT;

// * Code
const api = express();
const router = express.Router();

api.use(express.json());
api.use(cors());

const buildPath = path.join(__dirname, 'dist');
api.use(express.static(buildPath));

// Serve static files from the 'dist' directory
api.use(express.static(path.join(__dirname, 'dist')));

// * Connect to DB
const PASSWORD = '5kIUW3mgOq6JZVVW';
const URL = `mongodb+srv://crosswes:${PASSWORD}@cluster0.bngeo2b.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;
mongoose.connect(URL, {
  dbName: 'Final project beetroot',
});

// Success
mongoose.connection.on('connected', () => console.log('Connected to DB!'));

// Failed
mongoose.connection.on('error', (e) =>
  console.log(`Connection to DB failed: ${e}`)
);

api.get('*', (req, res) => {
  res.sendFile(path.join(buildPath, 'index.html'));
});

api.use('/', router);

// * Hello (test)
router.get('/hello', (_, res) => res.send('Hello World!'));

// * Server (local)
if (DEV) {
  api.listen(3000, () => console.log('Server is running'));
}

module.exports.handler = serverless(api);

// !PEACE 1
// // * Base
// import express, { Router } from 'express';
// import serverless from 'serverless-http';
// import mongoose from 'mongoose';
// import cors from 'cors';
// import 'dotenv/config';
// import path from 'path';
// import { fileURLToPath } from 'url';

// const DEV = process.env.DEVELOPMENT;

// // * Code
// const api = express();
// const router = Router();

// api.use(express.json());
// api.use(cors());

// const __dirname = path.dirname(fileURLToPath(import.meta.url));

// // idk what i need here
// api.use(express.static(path.join(__dirname, '/dist')));

// // api.use(
// //   express.static(
// //     path.dirname('../../../frontend/dist')
// //     // path.dirname(fileURLToPath(import.meta.url) + '../../../frontend/dist')
// //   )
// // );

// // * Connect to DB
// const PASSWORD = '5kIUW3mgOq6JZVVW';
// const URL = `mongodb+srv://crosswes:${PASSWORD}@cluster0.bngeo2b.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;
// mongoose.connect(`${URL}`, {
//   dbName: 'Final project beetroot',
// });
// // Success
// mongoose.connection.on('connected', () => console.log('Connected to DB !'));
// // Failed
// mongoose.connection.on('error', (e) =>
//   console.log(`Connected to DB failed: ${e}`)
// );

// router.get('*', (request, response) => {
//   return response.sendFile(
//     // path.join('../../frontend/dist/index.html')
//     path.dirname(fileURLToPath(import.meta.url))
//     // '../../../frontend/dist/index.html'
//   );
// });

// // * Hello (test)
// router.get('/hello', (_, res) => res.send('Hello World!'));
// api.use('/', router);

// // * Server (local)
// DEV && api.listen(3000, () => console.log('Server is running'));

// export const handler = serverless(api);
