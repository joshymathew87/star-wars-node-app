var movies_json = require('../movies.json');
var movies = movies_json.movies;

//------home---------------
exports.home = (req,res) => {
    res.render("home",{
        title : 'Star Wars App Home Page',
        movies : movies
    });
};

//------single movie---------------
exports.single_episode = (req,res) => {
    var episode_number = req.params.episode_number;
    var movie = {};
    for( var i=0; i<movies.length; i++)
    {
        if(movies[i].episode_number == episode_number)
        {
            movie = movies[i];
            break;
        }
    }
    if(Object.keys(movie).length === 0 && movie.constructor === Object)
    {
        res.render("not_found",{
            title: "404. Not found :(",
            movies : movies,
        });
    }
    else
    {
        res.render("movie_single",{
            title: movie.title,
            movies : movies,
            movie: movie
        });
    }
};

//------Non exisiting route.
exports.not_found = (req,res) =>{
    res.render("not_found",{
        title: "404. Not found :(",
        movies : movies,
    });
};