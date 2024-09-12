//export package
const { log } = require("console");
const express = require("express");

let app = express();


const moviesRouter=require('./routes/moviesRoutes');

//const moviesRouter = express.Router();



app.use(express.json());
app.use(express.static('./public'));


/*
app.use((req, res, next) => {
  req.requestedAt = new Date().toISOString();
  next();
});
*/

////////////////////////////////////////////////////////////////////////////////////////////////////////////


/*
app.get('/api/get/movies',getAllMovies);
app.get('api/get/movies/:id',getMovie);
app.patch("/api/get/movies/:id",updateMovie);
app.post("/api/get/movies",createMovies);
app.delete("/api/get/movies/:id",deleteMovie);
*/


app.use('/api/get/movies',moviesRouter);



module.exports =app;
