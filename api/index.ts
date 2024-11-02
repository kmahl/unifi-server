require('dotenv').config();
import { Request, Response } from 'express';

const express = require('express');
const app = express();
// const { sql } = require('@vercel/postgres');

const bodyParser = require('body-parser');
const path = require('path');

// Create application/x-www-form-urlencoded parser
const urlencodedParser = bodyParser.urlencoded({ extended: false });

// app.use(express.static('public'));

app.get('/', function (req: Request, res: Response ): Response {
    return res.status(200).json({ success: true, message: "ok" });
});

app.listen(3000, () => console.log('Server ready on port 3000.'));

module.exports = app;