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

    const Number1 = Number(req.body.num1);
    const Number2 = Number(req.body.num1);
    Total = Number1 + Number2;
    console.log(Total);
    res.send("The sum of two given number is: " + Total)

})


app.listen(PORT, () => console.log("Server running on port 3000."))