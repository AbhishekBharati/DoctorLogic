const express = require("express");
const app = express();
app.use(express.json());

// Creating a Dummy Data :-
var users = [{
  name: 'John',
  kidneys: [{
    healthy: false
  }, {
    healthy: true
  }]
}]

//Handling GET request :-
app.get("/", (req, res) => {
  const JohnKidneys = users[0].kidneys;
  const numberOfKidneys = JohnKidneys.length;
  let numberOfHealthyKidneys = JohnKidneys.filter((obj) => obj.healthy == true);
  numberOfHealthyKidneys = numberOfHealthyKidneys.length;
  // How to do it without using filter;
  // for (let i = 0; i < JohnKidneys.length; i++) {
  //   if (JohnKidneys[i].healthy) {
  //     numberOfHealthyKidneys++;
  //   }
  // }
  const numberOfUnhealthyKidneys = numberOfKidneys - numberOfHealthyKidneys;
  res.json({
    numberOfKidneys,
    numberOfHealthyKidneys,
    numberOfUnhealthyKidneys
  })
})

// Handling POST request :-
app.post("/", (req, res) => {
  const isHealthy = req.body.healthy;
  users[0].kidneys.push({
    healthy: isHealthy
  })
  res.json({
    msg: "Done"
  })
})

// Handling PUT requeust:-
app.put("/", (req, res) => {

})

// Handling DELETE request :-
app.delete("/", (req, res) => {

})

// Backend is listening at port 3000.
app.listen(3001, () => {
  console.log("Port is running at 3001");
})
