const Movie = require("./../Models/movieModel");

//GET -api/movies//
exports.getAllMovies = async (req, res) => {
  try {
    const movies = await Movie.find();
    res.status(200).json({
      status: "sucess",
      length: movies.length,
      data: {
        movie: movies,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err.message,
    });
  }
};

exports.getMovie = async (req, res) => {
  try {
    const movie = await Movie.findOne({ _id: req.params.id });
    if (!movie) {
      return res.status(404).json({ message: "Movie not found" });
    }
    res.status(200).json(movie);
    let hi = req.body;
    console.log(hi);
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

//POST -api/movies

exports.createMovies = async (req, res) => {
  try {
    const movie = await Movie.create(req.body);
    res.status(201).json({
      status: "sucess",
      data: {
        movie: movie,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err.message,
    });
  }
};

//PATCH - api/movies
exports.updateMovie = async (req, res) => {
  try {
    const movie = await Movie.updateOne(
      { _id: req.params.id },
      { $set: { name: "Updated Name" } }
    );
    res.status(200).json(movie);
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err.message,
    });
  }
};

///////////   DELETE - api/movies   \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
exports.deleteMovie =async (req, res) => {
  try{
      const movie=await Movie.deleteOne({_id: req.params.id});
      res.status(200).json(movie);
  }catch(err){
    res.status(400).json({
      status: "fail",
      message: err.message,

  });
}
};
