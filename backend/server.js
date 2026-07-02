const express = require('express');
const connectDB = require('./db');
const app = express();
const port = 8080;


app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

app.get('/professional', async (req, res) => {
    const db = await connectDB();
    const professional = await db.collection('professionals').findOne({});
    res.json(professional);
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});