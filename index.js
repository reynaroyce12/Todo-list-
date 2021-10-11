const express = require('express')
const bodyParser = require('body-parser')

const app = express()
let items = []

// app.use("view engine","ejs")
app.set('view engine', 'ejs')

app.use(express.urlencoded({extended: true})); 
app.use(express.json());   
app.use(express.static("public"))

app.get("/", function(req,res){
    var today = new Date()

    var dateFormat = {
        weekday: "long",
        day: "numeric",
        month: "long"
    }

    var dayToday = today.toLocaleDateString("en-US", dateFormat)
    res.render("list.ejs", {kindOfDay: dayToday, newListItem: items})    
})

app.post("/", function(req, res) {
    let item = req.body.NewItem
    items.push(item)

    // console.log(item)

    res.redirect("/")
})

 
app.listen(3000, () =>{
    console.log("Server started at port 3000")
})