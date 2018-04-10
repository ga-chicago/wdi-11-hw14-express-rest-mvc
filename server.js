// DEPENDENCIES
const express = require('express');
const app = express();

// run `npm install` to install dependencies in package.json

// * Your mission is to complete the app
// * The app will need routes for index and show
// * The app will need views for index and show
//
// * Make it so you can click on a mission’s name on the index page, and be taken to that mission’s show page
// * Bonus: add images to the data and have them display
// * Bonus: add static css to style the pages

// NOTES:
// ejs has not been installed
// views folder has not been created
// views/missions folder has not been created

// PORT
const PORT = 3000;

// DATA - put into marsMissions.js file inside of a models folder, for module.exports
// remember to require it in the server


// INDEX Route
// send data to 'missions/index.ejs' view
// the view should display just the names of each mission
app.get('/marsMissions', (req, res) => {
  res.render('./missions/index.ejs', {
    missions: marsMissions,
    pageTitle: "Mars Missions Index"
  })
})
const marsMissions = require('./models/marsMissions.js')

// SHOW Route
// send data to 'missions/show.ejs' view
// the view should display all the data for a single mission
app.get('/marsMissions/:id', (req, res) => {
  // const index = req.params.id

  // you "Render" templates where you previously just "send"ed data
  // the data you want to display in your template is the second parameter
  // your data will ***ALWAYS*** be an object. 
  // advice: use singular for show page
  res.render('./missions/show.ejs', {
    mission: marsMissions[req.params.id]
  })

})

// LISTENER
app.listen(PORT, function() {
  console.log('Missions to Mars running on port: ' + PORT);
})