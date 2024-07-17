const express = require('express');
const app = express();
const port = 5000;
const web = require('./routes/web');
const connectDB = require('./db/connectDB');
const flash = require('connect-flash')
const session = require('express-session')

//Flash messages
app.use(flash());

//message show
app.use(session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true,
}));


//parse application/x-www-form-urlencoded data get req.body
app.use(express.urlencoded({extended: false}))

//ejs set html css
app.set('view engine', 'ejs')

//css image link
app.use(express.static('public'))

//connect database
connectDB();

app.use('/', web);

//server create
app.listen(port, () => console.log("Server start localhost: 5000"));