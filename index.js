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
  for (let i = 0; i < users[0].kidneys.length; i++) {
    users[0].kidneys[i].healthy = true;
  }
  res.json({});
})

// Handling DELETE request :-
// It removes the unhealthy kidneys :-
app.delete("/", (req, res) => {
  const newKidneys = [];
  for (let i = 0; i < users[0].kidneys.length; i++) {
    if (users[0].kidneys[i].healthy) {
      newKidneys.push({
        healthy: true
      })
    }
  }
  users[0].kidneys = newKidneys;
  res.json({
    msg: "Done"
  })
})

// Backend is listening at port 3000.
app.listen(3001, () => {
  console.log("Port is running at 3001");
})
