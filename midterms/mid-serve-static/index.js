//1. Installing Express
//2. Install libraries/dependencies
//3. Require statements

const express = require('express');
const app = express();

//require body-parser for this method
var bodyParser = require('body-parser');

//Create application/x-www-form-urlencoded paser
var urlencodedParser = bodyParser.urlencoded({ extended: false });

//4. Use the middleware required for serving static files

app.use(express.static('public'));

//create the route to serve a static index.html

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/' + 'index.html');
    throw new Error('Error 404');
});

app.post('/process_post', urlencodedParser, function (req, res) {
    response = {
      first_name: req.body.first_name,
      last_name: req.body.last_name,
    };
    console.log(response);
    res.end(JSON.stringify(response));
  });

//Setting the listener to ENV PORT info

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`listening on port ${port}`)
});