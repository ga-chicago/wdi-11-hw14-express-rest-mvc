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

// * Bonus: add images to the data and have them display
// * Bonus: add static css to style the pages



// SHOW Route
// send data to 'missions/show.ejs' view
// the view should display all the data for a single mission


// LISTENER
// PORT

const PORT = 3000;
app.listen(PORT, function() {
  console.log('Missions to Mars running on port: ' + PORT);
})