const express = require("express");
const bodyparser = require("body-parser");
const app = express();
const PORT = 3000;

app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());
app.set("view engine", "ejs");

var bmi = "";
var bmiConsequence =''

app.get("/", (req, res) => {
  console.log("Testing api");
  res.render("index", { bmiResult: bmi,bmiConsequence:bmiConsequence });
});

app.post("/", (req, res) => {
  const weight = Number(req.body.weight);
  const height = Number(req.body.height);
  bmi = (weight / (height * height)) * 10000;


//   if(((weight / (height * height)) * 10000)<18.5)

  if (bmi < 18.5) {
    bmiConsequence =
      "The BMI of your body is: " +
      bmi +
      ".And thus you come as an underweight person.";
  }
  if (bmi > 18.5 && bmi < 24.9) {
    bmiConsequence =
      "The BMI of your body is: " +
      bmi +
      ". And thus you come as a healthy person.";
  } else if (bmi > 24.9) {
    bmiConsequence =
      "The BMI of your body is: " +
      bmi +
      ". And thus you come as an overweight person.";
  }

 
  res.redirect("/");
});

app.listen(PORT, () => console.log("Server running on port 3000."));
