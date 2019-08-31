import express from 'express';
import path from 'path';
import nunjucks from 'nunjucks';
import advertRouter from './routes/advert';
import indexRouter from './routes/index';
import bodyParser from 'body-parser';


const app = express();

nunjucks.configure('views', {
    autoescape: true,
    express: app,
    noCache: true
});

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.use(advertRouter);
app.use(indexRouter);


app.use('/node_modules/', express.static(path.join(__dirname, '../node_modules/')));

app.use('/public/', express.static(path.join(__dirname, '../public/')));





app.listen(3000, () =>{
	console.log('已监听3000端口，可以访问')
}); 