const express = require("express");
const bodyparser = require("body-parser")
const app = express();
const PORT = 3000;


app.use(bodyparser.urlencoded({ extended: true }))


app.get("/", (req, res) => {
    console.log("Testing api");
    res.sendFile(__dirname + '/index.html')

})

app.post('/', (req, res) => {

    const weight = Number(req.body.weight);
    const height = Number(req.body.height);
    const bmi = (weight/(height*height))*10000;
    
    res.write("The BMI of your body is: " + bmi);
    res.end()
    console.log(bmi);
    // document.getElementById("BmiResult").innerHTML = 'The BMI of your body is: ${bmi}'  ;

})


app.listen(PORT, () => console.log("Server running on port 3000."))