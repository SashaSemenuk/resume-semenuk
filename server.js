const express = require('express');
const PORT = process.env.PORT || 3000;
const app = express();
const path = require('path');


app.listen(PORT, (error) => {
    error ? console.log((error)) : console.log((`listening port ${PORT}...`))
});


app.use(express.urlencoded({extended: false}));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname+'/views/index.html'));
});


