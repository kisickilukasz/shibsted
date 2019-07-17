const express = require('express');
const app = express();

const port = 8000;

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

require('./app/routes')(app);
app.listen(port, () => console.log(`We are live on port ${port}`));
