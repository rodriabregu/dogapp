import express from 'express';
import mongoose from 'mongoose';
import Cors from 'cors';
import Cards from './dbCards.js';
//App Config
const app = express();
const port = process.env.PORT || 3001;
const password = process.env.PASSWORD || 'root123';
const connectionDB = `mongodb+srv://root:${password}@cluster0.t7knn.mongodb.net/pets-tinder?retryWrites=true&w=majority`
//middleware
app.use(express.json());
app.use(Cors());
//db Config
mongoose.connect(connectionDB, {})
// api endpoints
app.get('/', (req, res) => res.status(200).send('Hello World'));
app.post('/pets/card', (req, res) => {
  const bodyCard = req.body;
  Cards.create(bodyCard, (err, data) => {
    err ? res.status(500).send(err) : res.status(201).send(data);
  })
})
app.get('/pets/card', (req, res) => {
  Cards.find((err, data) => {
    err ? res.status(500).send(err) : res.status(200).send(data);
  })
})

//listener
app.listen(port, () => console.log(`Server running on port ${port}`));