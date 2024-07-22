const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

const API_KEY = '4befdcef5cec4dccbafef0de15768530';  // Replace with your actual News API key

app.use(cors());

app.get('/api/posts', async (req, res) => {
    const { page = 1 } = req.query;
    try {
        const response = await axios.get(`https://newsapi.org/v2/everything?q=technology&page=${page}&pageSize=10&apiKey=${API_KEY}`);
        res.json(response.data);
    } catch (error) {
        console.error(error);
        res.status(500).send('Server error');
    }
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
