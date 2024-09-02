const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const mongoURI = 'mongodb+srv://aarnavsingh836:Cucumber1729@rr.oldse8x.mongodb.net/rackingSystem?retryWrites=true&w=majority&appName=rr';

mongoose.connect(mongoURI, {
});

const rackSchema = new mongoose.Schema({
  column: String,
  row: Number,
  stack: Number,
  packages: [String]
});

const Rack = mongoose.model('Rack', rackSchema);

app.get('/api/racks', async (req, res) => {
  try {
    const racks = await Rack.find();
    res.json(racks);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.post('/api/racks', async (req, res) => {
  const { column, row, stack, qrCode } = req.body;
  try {
    let rack = await Rack.findOne({ column, row, stack });
    if (rack) {
      rack.packages.push(qrCode);
      await rack.save();
    } else {
      rack = new Rack({ column, row, stack, packages: [qrCode] });
      await rack.save();
    }
    res.status(201).json(rack);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.delete('/api/racks', async (req, res) => {
  const { column, row, stack, qrCode } = req.body;
  try {
    const rack = await Rack.findOne({ column, row, stack });
    if (rack) {
      rack.packages = rack.packages.filter(code => code !== qrCode);
      await rack.save();
    }
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.get('/api/racks/search', async (req, res) => {
  const { qrCode } = req.query;
  try {
    const rack = await Rack.findOne({ packages: qrCode });
    if (rack) {
      res.json({ location: `${rack.column}-${rack.row}-${rack.stack}` });
    } else {
      res.status(404).send('QR Code not found');
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.listen(5000, () => {
  console.log('Server is running on port 5000');
});