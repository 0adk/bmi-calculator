//jshint es version:6

const express = require("express")
const bodyParser = require("body-parser")

const app = express()
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function (req, res) {
    res.sendFile(__dirname + "/bmiCalculator.html")
})

app.post("/", function (req, res) {
    var num1 = Number(req.body.num1)
    var num2 = Number(req.body.num2)
    var result = num1 + num2

    res.send("The result is " + result)
})
app.get("/bmicalculator", function (req, res) {
  res.sendFile(__dirname + "/bmiCalculator.html");
});
app.post("/bmicalculator", function (req, res) {
    var weight = Number(req.body.weight)
    var height = Number(req.body.height)/100
    var result = weight / Math.pow(height, 2);
    res.send("<h1>Your BMI is " + result.toFixed(2)+ "</h1><br/><img src='https://healthtravelguide.com/wp-content/uploads/2020/06/Body-mass-index-table.png'/>");

})

app.listen(3000, function () {
    console.log("server on port 3000")
})
