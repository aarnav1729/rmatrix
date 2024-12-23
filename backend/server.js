const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

app.use(cors({
  origin: '*' ,
  methods: ['GET', 'POST', 'DELETE'], 
  credentials: true 
}));

app.use(express.json());

const mongoURI = 'mongodb+srv://aarnavsingh836:Cucumber1729@rr.oldse8x.mongodb.net/rackingSystem?retryWrites=true&w=majority&appName=rr';

mongoose.connect(mongoURI, {});

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

  // Validate input
  if (!column || !row || !stack || !qrCode) {
    return res.status(400).json({ message: 'Invalid input. Please provide column, row, stack, and QR Code.' });
  }

  try {
    // Debugging log for request data
    console.log('Received data:', req.body);

    const existingRack = await Rack.findOne({ packages: qrCode });
    if (existingRack) {
      return res.status(400).json({ 
        message: 'QR Code already exists.', 
        location: {
          column: existingRack.column,
          row: existingRack.row,
          stack: existingRack.stack
        }
      }); 
    }

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
    console.error('Error saving data:', error); // Log the error for debugging
    res.status(500).json({ message: 'Internal server error.' });
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