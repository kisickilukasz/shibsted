const gifRoutes = require('./gif_routes.js');
const imageRoutes = require('./image_routes');


module.exports = function (app) {
    gifRoutes(app);
    imageRoutes(app);
};
