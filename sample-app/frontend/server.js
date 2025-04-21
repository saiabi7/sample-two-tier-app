const express = require('express');
const app = express();
const axios = require('axios');

app.get('/', async (req, res) => {
  try {
    const response = await axios.get('http://backend.app-tier.svc.cluster.local:5000');
    res.send(`<h1>Frontend: Hello</h1><p>Backend says: ${response.data}</p>`);
  } catch (err) {
    res.send(`<h1>Frontend</h1><p>Could not connect to backend</p>`);
  }
});

app.listen(3000, () => {
  console.log("Frontend is running on port 3000");
});
