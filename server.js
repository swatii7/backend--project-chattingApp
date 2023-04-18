//core module
const bodyParser = require('body-parser')

//third party module
const express = require('express');
const dotenv = require('dotenv').config();
const cors = require('cors');
const mongoose = require('mongoose');

//own routes import
const users = require("./routes/users")


//constants
const app = express();
const port = process.env.PORT || 5850;
const mongodbURI = process.env.MONGODB_URI;

//cors middleware
app.use(cors());

// Body Parser middleware to parse request bodies
app.use(
    bodyParser.urlencoded({
    extended: false,
    })
    );
    app.use(bodyParser.json()); 

    // //api routes
    // app.use("api/users", users)

    // API endpoint handler
app.get('/api/users', async (req, res) => {
  try {
    // Perform some asynchronous operation here
    const result = [{
      id:'test',
      name:'test',
    }];

    res.json(result);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal server error' });
  }
});

    //localhost: 5000/api/Users/signup
      //localhost: 5000/api/admin/signup
        //localhost: 5000/api/messages
          //localhost: 5000/api/Users/

//start server
const server = app.listen(port,()=>{
    console.log("server is running on",port);
    })

    //put it after the server
    const io = require('socket.io')(server); //call server on socket

    //Assign socket object to every request (app.use worked as a middleware)
    app.use(function(req, res , next) {
        req.io = io;
        next();
    })

    // Database configuration
console.log(process.env.MONGOOSE_URI,'hello world');
mongoose.
connect("mongodb://localhost:27017/chat-app")
.then(() => console.log("MongoDB Successfully Connected"))
.catch(err => console.log(err));