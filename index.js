const express = require('express');
const app = express();
const dotenv = require('dotenv');


const afroMusic = [
    {artist:'Davido', songTitle:'10 Kilo',songUrl:'https://www.youtube.com/watch?v=62Zazi9KEJc'},

    {artist:'Burnaboy', songTitle:'we pray',songUrl:'https://open.spotify.com/track/6xX6zmaXeKzB4u9TiM1XgU?si=8e1886bd7b6a4056'},

    {artist:'Wizkid', songTitle:'forever be mine',songUrl:'https://open.spotify.com/track/1m7j6RWUxeBzTOY4hcWsoj?si=a6f262a875284ee5'}
    
]

app.get('/music', (req, res) => {
    res.send({afroMusic});
})





const port = process.env.PORT || 5500;
app.listen(port, () => {
    console.log(`server started at ${port}`);

})