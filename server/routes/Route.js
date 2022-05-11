import express from 'express';
import { getNews } from '../controller/news-controller.js';

//import { getNews } from '../controller/news-controller.js';

const route = express.Router();


//route.get('/news', () =>{
//    console.log('Hello');
//});
route.get('/news',getNews);


export default route; 