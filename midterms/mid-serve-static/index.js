//1. Installing Express
//2. Install libraries/dependencies
//3. Require statements

const express = require('express');
const app = express();

//require body-parser for this method
var bodyParser = require('body-parser');

//Create application/x-www-form-urlencoded paser
var urlencodedParser = bodyParser.urlencoded({ extended: false });

//import statements for path, mimetype, and multer
const path = require('path');
const mime = require('mime-types');
const multer = require('multer');

//use multer to support file upload feature
const fileStorage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/'); //specify destination directory
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage: fileStorage });

//4. Use the middleware required for serving static files

app.use(express.static('public'));

//create the route to serve a static index.html

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/' + 'index.html');
  throw new Error('Error 404');
});

app.post('/process_post', urlencodedParser, function (req, res) {
  response = {
    name: req.body.name,
    Subject: req.body.Subject,
    Message: req.body.Message,
    Email: req.body.Email,
  };
  console.log(response);
  res.end(JSON.stringify(response));
});

//file upload route
app.post('/uploads', upload.single('myFile'), (req, res) => {
  console.log(req.file);

  req.file.mimetype = mime.lookup(req.file.originalname);

  res.sendFile(path.join(__dirname, 'file-uploaded.html'));
});

app.get('/file-upload', (req, res) => {
  res.sendFile(__dirname + '/' + 'file-upload.html');
});

//Setting the listener to ENV PORT info

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
