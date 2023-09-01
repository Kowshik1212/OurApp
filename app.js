import express from 'express';
const app = express();
const port = process.env.PORT || 3000;
import web from './routes/web.js'

app.use('./public', express.static('public'))
//set template engine
app.set('view engine', 'ejs');

//Load routes
app.use('/', web);

app.listen(port, () => { console.log(`Listening to port: ${port}`) });