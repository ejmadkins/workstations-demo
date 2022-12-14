const { Storage } = require('@google-cloud/storage');
const express = require('express');
const app = express();
const storage = new Storage();
app.use(express.json());

const bucketName = 'ejmadkins-path-prod';

app.get('/', async (req, res) => {
  try {
    const [files] = await storage.bucket(bucketName).getFiles();
    const fileResult = files.map((file) => file.name);
    console.log(fileResult);
    res.send(fileResult);
  } catch (error) {
    res.status(400).send(error.message);
  }
});

module.exports = app;
