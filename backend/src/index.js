const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333);
/*métodos http
get: buscar/listar
post: criar
put: altera
delete: deletar uma informação no backend
*/

/* tipos de parametros
Query params: parametros nomeados enviados na rota
após o simbolo de  ?
Route params: parametros utilizados para identificar
recursos
Request body: Corpo da requisição, utilizado para criar

*/
/*
SQL: MySQL, SQLite, PostgreSQL, Oracle, Microsoft SQL Server
NoSQL: MongoDB, CouchDB, etc
*/

/*
driver: SELECT * FROM users
Query Builder: table('users'.)
*/
