
// Import express
let express = require('express')
// Initialize the app
let app = express();

// Import Body parser
let bodyParser = require('body-parser');
// Import Mongoose
let mongoose = require('mongoose');
// Configure bodyparser to handle post requests
app.use(bodyParser.urlencoded({
   extended: true
}));
app.use(bodyParser.json());
// Connect to Mongoose and set connection variable
// Deprecated: mongoose.connect('mongodb://localhost/resthub');
mongoose.connect('mongodb://localhost:27017/sb_rest', { useNewUrlParser: true, useUnifiedTopology: true});
var db = mongoose.connection;

// Added check for DB connection
if(!db)
    console.log("Error connecting db")
else
    console.log("Db connected successfully")


// Import routes
let apiRoutes = require("./api-routes")

// Setup server port
var port = process.env.PORT || 8888;

// Use Api routes in the App
app.use('/api', apiRoutes)

// Send message for default URL
app.get('/', (req, res) => res.send('Welcome to NodeJS, Express Application'));
// Launch app to listen to specified port
app.listen(port, function () {
     console.log("Running NodeJS, Express application on port " + port);
});