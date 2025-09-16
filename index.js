const express = require('express');
const app = express();
const dotenv = require('dotenv');


const afroMusic = [
    {artistImage:'https://dailypost.ng/wp-content/uploads/2024/10/Davido.jpg',artist:'Davido', songTitle:'10 Kilo',songUrl:'https://www.youtube.com/watch?v=62Zazi9KEJc'},

    {artistImage:'https://i.scdn.co/image/ab67616100005174b4e44d0f4e3e47af2cf06f3f',artist:'Burnaboy', songTitle:'we pray',songUrl:'https://open.spotify.com/track/6xX6zmaXeKzB4u9TiM1XgU?si=8e1886bd7b6a4056'},

    {artistImage:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxJyOB0HEaN88bFUYzNbpTiMXPY9F0zAZdMA&s',artist:'Wizkid', songTitle:'forever be mine',songUrl:'https://open.spotify.com/track/1m7j6RWUxeBzTOY4hcWsoj?si=a6f262a875284ee5'}
    
]

app.get('/music', (req, res) => {
    res.send({afroMusic});
})





const port = process.env.PORT || 5500;
app.listen(port, () => {
    console.log(`server started at ${port}`);

})