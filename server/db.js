import { createPool } from 'mysql2/promise'

export const pool = new createPool({
    host : 'localhost',
    port : 3306,
    user : 'Mario',
    password : '1712',
    database : 'task'    

});
