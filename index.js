const morgan = require('morgan');
const cors = require('cors');
const path = require('path');
const mongoose = require('mongoose');
const express = require('express');
const exphbs = require('express-handlebars');
const app = express();
const PORT = process.env.PORT | 5000;

/* Mongo Connection */
const URI = "mongodb://localhost:27017/Agenda";
mongoose.connect(URI);
const connection = mongoose.connection;

app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(express.static(path.join(__dirname, 'src', 'public')));
app.use(morgan('dev'));
app.use(cors());

app.engine('.hbs', exphbs({
    extname:".hbs",
    defaultLayout: path.join(__dirname, 'src', 'views', 'base', 'main'),
    layoutsDir: path.join(__dirname, 'src', 'views', 'base'),
    partialsDir: path.join(__dirname, 'src', 'views', 'partials')
}));

app.set('view engine', '.hbs');
app.set('views', path.join(__dirname, 'src', 'views'));

app.use(require('./src/routes/home'));

app.listen(PORT, ()=>{
    console.log("Server open");
    connection.on('open', ()=>{
        console.log("Open");
    });
})