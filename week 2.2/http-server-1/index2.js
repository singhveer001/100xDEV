const express = require('express')
const app = express(); 
const port = 3040

app.get('/route-handler', function(req, res) {
//   res.send('Hello World!')
  res.json({
    name: "Veer",
    age: 24,
    height : 5.6
  })
})

app.get('/', function(req, res) {
  res.send('Hello World!')
})

app.listen(port, function() {
  console.log(`Example app listening on port ${port}`)
})