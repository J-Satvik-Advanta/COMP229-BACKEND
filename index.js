const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const productRoutes = require('./routes/product-routes');

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/Marketplace', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

mongoose.connection.on('connected', () => {
  console.log('Connected to MongoDB');
});

mongoose.connection.on('error', (err) => {
  console.log('MongoDB connection error:', err);
});

app.get('/', (req, res) => {
  res.send({ message: "Welcome to DressStore application." });
});

app.use('/api', productRoutes);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
