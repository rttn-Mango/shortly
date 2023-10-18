import express from 'express';
import axios from 'axios';
import cors from 'cors';
import dotenv from 'dotenv';


const PORT = 3000;
const app = express();
const test = dotenv.config()

app.use(cors())

//Fetch request to the t.ly api
app.get('/short', (req, res) => {
    const options = {
        url: new URL(`https://t.ly/api/v1/link/shorten`),
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${test.parsed.VITE_API_KEY}`,
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        params: {"long_url": `${req.query.long_url}`,}
    }

    axios(options).then(response => {
        res.json(response.data);
    }).catch(err => console.error(err));
})


app.listen(PORT, () => {
    console.log(`Listening on ${PORT}`);
})