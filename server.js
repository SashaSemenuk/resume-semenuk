const express = require('express');
const PORT = process.env.PORT || 3000;
const app = express();
const path = require('path');

app.set('view engine', 'ejs');

const createPath = (page) => path.resolve(__dirname, 'views', `${page}.ejs`);

app.listen(PORT, (error) => {
    error ? console.log((error)) : console.log((`listening port ${PORT}...`))
});

app.use(express.urlencoded({extended: false}));

app.use('/styles', express.static(path.join(__dirname, 'styles')));

app.get('/', (req, res) => {
    res.render(createPath('index'));
});







