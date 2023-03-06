const express = require('express');
const app = express();

app.use(express.json());

//Array for GET Method
const movies = [{
    id: 1,
    title:'Superman'
},
{
    id: 2,
    title: 'Superman'
},
{
    id: 3,
    title: 'Iron Man'
}
];

//add a movie
app.post('/api/movies', (req, res) => {
    const movie = {
        id: movies.length + 1,
        title: req.body.title
    }
    movies.push(movie);
    res.send(movie);
});

app.listen(4000, () => console.log('Listening on port 4000'));