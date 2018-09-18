
const express = require('express');

const app = express();
const router = express.Router();
app.use('/a', router);


router.get('/b', (req, res) =>{

  console.log('haaai')
})


app.listen(3000, () => {
  console.log('Started on port 3000');
});