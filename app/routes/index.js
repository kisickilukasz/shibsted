const gifRoutes = require('./gif_routes');
const imageRoutes = require('./image_routes');


module.exports = function (app) {
    gifRoutes(app);
    imageRoutes(app);
};
