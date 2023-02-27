const express = require('express');
app = express();

app.use(express.static('public'));

//import statements for path, mimetype, and multer
const path = require('path');
const mime = require('mime-types');
const multer = require('multer');

//use multer to support file upload feature
const fileStorage = multer.diskStorage({
    destination: function (req, file, cb){
        cb(null, 'uploads/'); //specify destination directory 
    },
    filename: function(req, file, cb){
        cb(null, file.originalname);
    },
});

const upload = multer({storage: fileStorage});

//file upload route
app.post('/uploads', upload.single('myFile'), (req, res) => {
    console.log(req.file);

    req.file.mimetype = mime.lookup(req.file.originalname);

    res.sendFile(path.join(__dirname, 'file-uploaded.html'));
});

app.get('/file-upload', (req, res) => {
    res.sendFile(__dirname + '/' + 'file-upload.html')
});

//Setting the listener to ENV PORT info

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
