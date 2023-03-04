var express = require('express');
var app = express();

app.use(express.static('public'));

const path = require('path');
const mime = require('mime-types');
const multer = require('multer');

const fileStorage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

const checkFileType = function (file, cb) {
      //Allowed file extensions
      const fileTypes = /jpeg|jpg|png|gif|svg/;

 //check extension names
  const extName = fileTypes.test(path.extname(file.originalname).toLowerCase());

  const mimeType = fileTypes.test(file.mimetype);

  if (mimeType && extName) {
    return cb(null, true);
  } else {
    cb("Error: You can Only Upload Images!!");
  }
};

const upload = multer({ storage: fileStorage });

app.post('/uploads', upload.single('myFile'), (req, res) => {
  console.log(req.file);

  req.file.mimetype = mime.lookup(req.file.originalname);

  res.sendFile(path.join(__dirname, 'file-uploaded.html'));
});

app.get('/file-upload', (req, res) => {
  res.sendFile(__dirname + '/' + 'file-uploaded.html');
});

app.get('/get_process.html', function (req, res) {
  res.sendFile(__dirname + '/' + 'get_process.html');
});

app.get('/process_get', function (req, res) {
  // Prepare output in JSON format
  response = {
    name: req.query.name,
    sub_ject: req.query.sub_ject,
    mes_sage: req.query.mes_sage,
    em_ail: req.query.em_ail,
  };
  console.log(response);
  res.end(JSON.stringify(response));
});

//Setting the listener to ENV PORT info

app.listen(3000, function(){
    console.log('Server is running at http://localhost:3000');
  });