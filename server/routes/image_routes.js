const axios = require('axios');
const apiKey = require('../constants/apiKeys.js');

module.exports = function (app) {
    app.get('/images', (req, res) => {
            const searchQuery = req.query.searchQuery ? req.query.searchQuery : '';
            axios.get(`https://pixabay.com/api/?key=${apiKey.PIXABAY_API_KEY}&q=${searchQuery}&per_page=5&image_type=photo`)
                .then(response => {
                    const data = response.data.hits.map(image => {
                        return {
                            id: image.id,
                            url: image.webformatURL,
                            alt: image.tags,
                        }
                    });
                    return res.json(data)
                })
                .catch(error => console.log(error));
        }
    )
};
