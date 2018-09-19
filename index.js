const express = require('express');
const hbs = require('express');
const mongooseDb = require('./db/mongooseDb');
const {User} = require('./models/users');
const bodyParser = require('body-parser');

const app = express();
app.set('view engine', 'hbs');
app.set('views', __dirname + '/views');


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/static', express.static(__dirname + '/static'));

const router = express.Router();
app.use('/', router);

router.get('/', (req, res) =>{

  res.render('home.hbs');

})

router.get('/login', (req,res) => {

  res.render('login.hbs');

})

router.get('/signup', (req, res) => {


  res.render('signup.hbs');

})
router.post('/signup', (req, res) => {

  console.log('req', req.body);

  const userName = req.body.userName;
  const password = req.body.password;

  let userData = new User({
 
    userName: userName,
    password: password

  })


  userData.save().then((doc) => {

  

    res.render('home.hbs', { userName });
  }, error => {
    console.log('errorsaveuser', error);
  })

})
 



app.listen(3000, () => {
  console.log('Started on port 3000');
});