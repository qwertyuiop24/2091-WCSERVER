//1. Installing Express
//2. Install libraries/dependencies
//3. Require statements

const express = require('express');
const app = express();

//4. Use the middleware required for serving static files

app.use(express.static('public'));

//create the route to serve a static index.html

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/' + 'index.html');
  throw new Error('Error 404');
});

//Setting the listener to ENV PORT info

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
