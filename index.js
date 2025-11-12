// setup express and ejs

var express = require ('express')
var ejs = require ('ejs')

// create the express application object 
const app = express()
const port = 8000

// Add this line to parse POST form data
app.use(express.urlencoded({ extended: true }));

// Serve static files (like CSS, JS, images)
app.use(express.static('public'));

// tell express that we want to use EJS as templating engine
app.set ('view engine', 'ejs');

// load the route handlers

const mainRoutes = require("./routes/main");
app.use('/', mainRoutes);

// Start the web app listening 

app.listen(port,()=> console.log(`Example app listening on port ${port}! `))