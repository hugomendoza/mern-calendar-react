const express = require("express");
const cors = require("cors");
require("dotenv").config();

const { dbConection } = require("./database/config");

// *Crear servidor de express
const app = express();

// * Base de datos
dbConection()

// *CORS
app.use(cors());

//* Directorio Público
app.use( express.static("public") );

//* Lectura y parseo del body de la respuesta = response
app.use( express.json() );

//* Rutas
app.use("/api/auth", require("./routes/auth"));
app.use("/api/events", require("./routes/events"));

//* Escuchar peticiones
app.listen(process.env.PORT, () =>{
  console.log(`Servidor corriendo en puerto ${ process.env.PORT }`);
})