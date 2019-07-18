const axios = require('axios');
const apiKey = require('../constants/apiKeys.js');

function buildResponse(data) {
    return data.map(item => {
        return {
            id: item.id,
            url: item.images.fixed_width.url,
            alt: item.title,
        }
    })
}

module.exports = function (app) {
    app.get('/gifs', (req, res) => {
        if (req.query.searchQuery) {
            const searchQuery = req.query.searchQuery ? req.query.searchQuery : '';
            axios.get(`https://api.giphy.com/v1/gifs/search?api_key=${apiKey.GIPHY_API_KEY}&q=${searchQuery}&limit=5&offset=0&rating=G&lang=en`)
                .then(response => {
                    const data = buildResponse(response.data.data);
                    return res.json(data);
                })
                .catch(error => console.log(error));
        } else {
            axios.get(`https://api.giphy.com/v1/gifs/trending?api_key=${apiKey.GIPHY_API_KEY}&limit=5&rating=G`)
                .then(response => {
                    const data = buildResponse(response.data.data);
                    return res.json(data);
                })
                .catch(error => console.log(error));
        }
    })
};
