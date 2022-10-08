const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const cors = require('cors');
var path = require('path');
const http = require('http');
// const server = http.createServer(app);


var indexRouter = require('./routes')
const app = express();
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use(express.static(path.join(__dirname, 'public')));
app.use(morgan('dev'));

// if (process.env.NODE_ENV === 'development') {
//     app.use(morgan('dev'));
// }

// app.get('/', function (req, res) {
// res.send('Express application working ...');
// });

// Start server
// app.listen(8080, () => console.log('server running ...'))

app.get('/express_backend', (req, res) => { //Line 9
    res.send({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' }); //Line 10
});

app.use('/', indexRouter)

module.exports = app;