//require Express
const express = require('express');
const res = require('express/lib/response');

//set express to a variable
const app = express();

//const mongoose = require('mongoose');
//const methodOverride = require ('method-override');



//Define a "root" route directly on app
app.get('/', function (req, res) {
    res.send('<h1>Welcome to Captains Log</h1>')
    //res.render('views/New');
});

//Set a variable of port 3000
app.listen(3000, function() {
    console.log("Listening on port 3000.");
});

//MVC SET_UP
//views    
// app.set('view engine', 'jsx');
// app.engine('jsx', require('express-react-views').createEngine());
// app.use(express.static('public'));


//models
// mongoose.connect(process.env.MONGO_URI, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//     useCreateIndex: true,
//     useFindAndModify: false
// });

//MIDDLEWEAR
// app.use(express.urlencoded({ extended: true }));
// app.use((req, res, next) => {
//     console.log(req.body)
//     next()
// });
// app.use(methodOverride('_method'));


//INDEX


//NEW
app.get('/logs/new', (req, res) => {
    res.render("views/New")
});

//D
//U
//C
//E
//S

