import { Router } from "express";
import {
    obtenertarea,
    obtenertareas,
    eliminartarea,
    actualizartarea,
    creartarea  
} from '../controlles/tasks.controllers.js'


const router = Router();

router.get('/tasks', obtenertareas);

router.get('/tasks/:id', obtenertarea);

router.post('/tasks',creartarea);

router.put('/tasks/:id',actualizartarea);

router.delete("/tasks/:id",eliminartarea);


export default router;
