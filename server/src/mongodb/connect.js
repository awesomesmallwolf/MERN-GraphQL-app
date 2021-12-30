import mongoose from 'mongoose';
require('dotenv').config();

const { MONGODB_URL } = process.env;

mongoose.connect(MONGODB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on('error', () => {
  console.error('Error while connecting to DB');
});
