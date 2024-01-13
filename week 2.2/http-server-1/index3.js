const express = require('express')
const bodyParser = require("body-parser")
const app = express(); 
const port = process.env.PORT || 3020 // New Port ka use karte hai bina code me changes kiye hue

app.use(bodyParser.json());
//  bodyParser.json() was used to parse incoming request bodies in JSON format. 
// It would parse the JSON data and populate the req.body property with the 
// parsed data, making it accessible in your Express routes.
app.post('/Conversations', function(req, res) {
    console.log(req.headers);
    const message = req.body.message; // whatever client send message we can see using req.body
    console.log(message);
    res.send({
    output : "2 + 2 = 4"
  })
})
console.log(`Using port ${port}`);
app.listen(port, function(error) {
    if (error) {
      console.error(`Error starting the server: ${error.message}`);
    } else {
      console.log(`Example app listening on port ${port}`);
    }
  });