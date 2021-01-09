const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('server/public'));

//ROUTES
const listRouter = require('./.routes/list.router');
app.use('/listdata', listRouter);


//start express
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log('scribbling notes on port', PORT);
});