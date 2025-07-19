import express from 'express';

const app = express();

app.get('/', (req, res) =>{
    res.send('server is listning')
});

app.get('/api/jokes', (req, res) =>{
    const jokes = [
        {id: 1, joke: 'Why did the chicken cross the road? To get to the other side!'},
        {id: 2, joke: 'Why did the chicken cross the road? To get to the other side!'},
        {id: 3, joke: 'Why did the chicken cross the road? To get to the other side!'},
        {id: 4, joke: 'Why did the chicken cross the road? To get to the other side!'}
    ];
    res.send(jokes)
})

const port = process.env.port || 3000;

app.listen(port, ()=>{
    console.log(`server is running on port ${port}`);
    
})

