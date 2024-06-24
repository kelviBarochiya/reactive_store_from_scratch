import express from 'express';
import cors from 'cors'; //import the cors (cross-origin resource sharing) middleware, which allows requests from different origins
import { today, thisWeek, thisMonth, Post } from '../posts';
import bodyParser from 'body-parser';

const app = express();
app.use(cors());
app.use(bodyParser.json())

const allPosts = [today, thisWeek, thisMonth]
//define a route for the '/posts' endpoint that responds to GET requests.
app.get('/posts', (req, res) => {
    console.log(req.query);
    res.json(allPosts); //send a JSON response containing an array with the toda, thisWeek,thisMonth variable
});

app.post<{},{},Post>('/posts', (req, res) => {
    // console.log(req.query);
    const post = {...req.body,id:(Math.random()*100000).toFixed()}
    allPosts.push(post)
    res.json(post); //send a JSON response containing an array with the toda, thisWeek,thisMonth variable
});

app.listen(8000, () => {
    console.log('Listening on port 8000');
});
