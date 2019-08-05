var express = require('express');
var cors = require('cors');
// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 8080;
// var allRoutes = require('./controllers');

// // Requiring our models for syncing
// var db = require('./models');

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

// Static directory
// app.use(express.static('public'));

// var exphbs = require('express-handlebars');
// app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
// app.set('view engine', 'handlebars');

const tacos = [{
    id:1,
    filling:'fish',
    isEaten:false
},{
    id:2,
    filling:'beef',
    isEaten:false
},{
    id:3,
    filling:'choco',
    isEaten:false
}]

// app.use('/',allRoutes);
app.get('/',(req,res)=>{
    res.json('Hello World')
})

app.get('/tacos',(req,res)=>{
    res.json(tacos)
})

app.get('/tacos/:id',(req,res)=>{
    res.json(tacos[req.params.id-1])
})

// db.sequelize.sync({ force: true }).then(function() {
app.listen(PORT, function() {
    console.log('App listening on PORT ' + PORT);
});
// });