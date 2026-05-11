const fs = require('fs/promises');
const express = require('express');
const app = express();
const path = require('path');

const port = 9000;

app.use(express.json());

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.get('/coreApi/promo/globalCategories', async (req, res) => {
    try {
      // Read data from the JSON file
      const data = await fs.readFile(path.join(__dirname, 'categories.json'), 'utf-8');
      const jsonData = JSON.parse(data);
      res.json(jsonData);
    } catch (error) {
      console.error('Error reading data:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
});

app.get('/coreApi/globalBackOffices', async (req, res) => {
  try {
    // Read data from the JSON file
    const data = await fs.readFile(path.join(__dirname, 'backOffice.json'), 'utf-8');
    const jsonData = JSON.parse(data);

    res.json(jsonData);
  } catch (error) {
    console.error('Error reading data:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.get('/coreApi/promo/companies', async (req, res) => {
  try {
    // Read data from the JSON file
    const data = await fs.readFile(path.join(__dirname, 'companies.json'), 'utf-8');
    const jsonData = JSON.parse(data);

    res.json(jsonData);
  } catch (error) {
    console.error('Error reading data:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});


app.get('/promoApi/clusters/summary', async (req, res) => {
  try {
    // Read data from the JSON file
    const data = await fs.readFile(path.join(__dirname, 'clusters.json'), 'utf-8');
    const jsonData = JSON.parse(data);

    res.json(jsonData);
  } catch (error) {
    console.error('Error reading data:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.post('/coreApi/globalShops', async (req, res) => {
  try {
    // Read data from the JSON file
    const data = await fs.readFile(path.join(__dirname, 'shops.json'), 'utf-8');
    const jsonData = JSON.parse(data);

    res.json(jsonData);
  } catch (error) {
    console.error('Error reading data:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.post('/coreApi/globalShops/channels', async (req, res) => {
  try {
    // Read data from the JSON file
    const data = await fs.readFile(path.join(__dirname, 'channels.json'), 'utf-8');
    const jsonData = JSON.parse(data);

    res.json(jsonData);
  } catch (error) {
    console.error('Error reading data:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.post('/coreApi/globalShops/transits', async (req, res) => {
  try {
    // Read data from the JSON file
    const data = await fs.readFile(path.join(__dirname, 'transits.json'), 'utf-8');
    const jsonData = JSON.parse(data);

    res.json(jsonData);
  } catch (error) {
    console.error('Error reading data:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});


app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
