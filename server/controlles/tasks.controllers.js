import {pool} from '../db.js'


export const   obtenertareas = async(req , res)=>{
    const [result] = await pool.query("SELECT * from tareas ORDER by createAt ASC");
    res.json(result);

};


export const   obtenertarea = async(req , res)=>{
    const [result] = await pool.query("SELECT * from tareas where id = ?" , req.params.id);
    if (result.length==0)
        return res.status(404).json({message:"Tarea no encontrada"});
         
    res.json(result[0]); 

    console.log(result);   



};

export const   creartarea = async (req , res)=>{
    const {titulo,descripcion} =req.body;
    const [result] = await pool.query("INSERT INTO tareas(titulo, descripcion) Values(?,?)",
    [titulo,descripcion]
    );
    res.json(
    {
        id: result.insertId, 
        titulo,
        descripcion
    }
    )
}

export const   actualizartarea = async(req , res)=>{
    const {titulo,descripcion} =req.body;
    const [result] = await pool.query("update tareas set ? where id = ?",[
        req.body,
        req.params.id,
    ]);
res.json(result); 

console.log(result);   
}

export const   eliminartarea = async(req , res)=>{
    const [result] = await pool.query("delete from tareas where id = ?" , req.params.id);
    if (result.length==0)
        return res.status(404).json({message:"Tarea no encontrada"});
         
    res.json(result[0]); 

    console.log(result);   



}