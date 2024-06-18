const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send({ message: "Welcome to DressStore application." });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
