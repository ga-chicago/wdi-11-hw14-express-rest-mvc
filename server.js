// DEPENDENCIES
const express = require('express');
const app = express();

const marsMissions = require('./models/missions.js')


app.get('/marsMissions', (req, res) => {
  res.render('index.ejs', {
    theMissions: marsMissions
  })
})

app.get('/marsMissions/:id', (req, res) => {
  res.render('show.ejs', {
    mission: marsMissions[req.params.id]
  })
})




const PORT = 3000;
app.listen(PORT, function() {
  console.log('Missions to Mars running on port: ' + PORT);
})