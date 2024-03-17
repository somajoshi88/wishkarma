const express = require('express');
const router = express.Router();
const multer = require('multer');
const csvParser = require('csv-parser');
const { Readable } = require('stream');
const payoutService = require('../services/payoutService');

const upload = multer({ storage: multer.memoryStorage() }); 

router.post('/upload',  upload.single('file') , async (req, res) => { 
  if (!req.file) {
    return res.status(400).send('No files were uploaded.');
  }
  
  try {
    const csvData = req.file.buffer.toString('utf8'); 
    console.log("csvData is : ",csvData)
    const readableStream = Readable.from(csvData);
    const results = [];
      readableStream.pipe(csvParser())
        .on('data', (data) => results.push(data))
        .on('end', () => {
          console.log("result is : ",results)
          payoutService.uploadPayouts(results);
          res.send("File uploaded successfully");
        });
    }
    catch (error) {
        console.error('error is {}',error)
        res.status(400).send(error);
    }
});


module.exports = router;
