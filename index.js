const express = require("express");
const bodyparser = require("body-parser");
const app = express();
const PORT = 3000;

app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());
app.set("view engine", "ejs");

var bmi = "";

app.get("/", (req, res) => {
  console.log("Testing api");
  res.render("index", { bmiResult: bmi });
});

app.post("/", (req, res) => {
  const weight = Number(req.body.weight);
  const height = Number(req.body.height);
  bmi = (weight / (height * height)) * 10000;
  if (bmi < 18.5) {
    bmi =
      "The BMI of your body is: " +
      bmi +
      ".And thus you come as an underweight person.";
  }
  if (bmi > 18.5 && bmi < 24.9) {
    bmi =
      "The BMI of your body is: " +
      bmi +
      ". And thus you come as a healthy person.";
  } else if (bmi > 24.9) {
    bmi =
      "The BMI of your body is: " +
      bmi +
      ". And thus you come as an overweight person.";
  }

  // res.end()
  // console.log(req.body);
  // console.log(bmi);
  // document.getElementById("BmiResult").innerHTML = 'The BMI of your body is: ${bmi}'  ;
  // res.render('index',{bmiResult:bmi});

  res.redirect("/");
});

app.listen(PORT, () => console.log("Server running on port 3000."));
