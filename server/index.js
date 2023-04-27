import  express from 'express';
import {puerto} from './config.js';

import indexrouts from  './routs/index.routs.js'
import taskroutes from './routs/task.routs.js'

const app = express(); //inicio una constante app

app.use(express.json())

app.use(indexrouts);
app.use(taskroutes);

app.listen(puerto);
console.log('El servidor esta corriendo en el puerto '+puerto);

