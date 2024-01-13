const express = require('express')
const app = express();  // Call the express function and get it in the app 
const port = 3030

// Define the routes
app.get('/', function(req, res) {  
  // Do whatever you want here 
  res.send('Hello World!')
})

// start the server
app.listen(port, function() {
  console.log(`Example app listening on port ${port}`)
})

