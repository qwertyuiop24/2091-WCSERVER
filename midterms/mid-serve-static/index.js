const express = require('express');
const app = express();

var bodyParser = require('body-parser');

var urlencodedParser = bodyParser.urlencoded({ extended: false });

app.use(express.static('public'));

const path = require('path');
const mime = require('mime-types');
const multer = require('multer');
const { maxHeaderSize } = require('http');

const fileStorage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },

  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

const upload = multer({
  storage: fileStorage,
  fileFilter: (req, file, cb) => {
    if (
      file.mimetype == 'image/png' ||
      file.mimetype == 'image/jpg' ||
      file.mimetype == 'image/jpeg' ||
      file.mimetype == 'image/jiff' ||
      file.mimetype == 'image/webp'
    ) {
      cb(null, true);
    } else {
      cb(null, false);
      cb(new Error('Image format only is accepted.'));
    }
  },
});

app.post('/uploads', upload.single('myFile'), (req, res) => {
  console.log(req.file);

  req.file.mimetype = mime.lookup(req.file.originalname);

  res.sendFile(path.join(__dirname, 'file-uploaded.html'));
});

//create the route to serve a static index.html
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/' + 'index.html');
});

app.get('/about', (req, res) => {
  res.sendFile(__dirname + '/' + 'about.html');
});

app.get('/blog', (req, res) => {
  res.sendFile(__dirname + '/' + 'blog.html');
});

app.get('/contact', (req, res) => {
  res.sendFile(__dirname + '/' + 'contact.html');
});

app.get('/upload', (req, res) => {
  res.sendFile(__dirname + '/' + 'upload.html');
});

//rerouting
app.get('ab*cd', function (req, res) {
  res.send('Error');
});

//forms in contacts
app.post('/process_post', urlencodedParser, function (req, res) {
  response = {
    name: req.body.name,
    subject: req.body.subject,
    message: req.body.message,
    email: req.body.email,
  };
  console.log(response);
  res.end(JSON.stringify(response));
});

//Setting the listener to ENV PORT info

app.listen(3000, function () {
  console.log('Server is running at http://localhost:3000');
});
