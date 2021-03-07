import Link from "next/link";

const MovieList = ({ movies }) => {
  const shorten = (text, maxLength) => {
    if (text && text.length > maxLength) {
      return text.substr(0, maxLength) + "...";
    }
  };
  return movies.map((movie) => {
    return (
      <div key={movie.id} className="col-lg-4 col-md-6 mb-4">
        <div className="card h-100">
          <Link href="/">
            <a>
              <img
                className="card-img-top"
                src={movie.image}
                alt={movie.name}
              />
            </a>
          </Link>
          <div className="card-body">
            <h4 className="card-title mb-1">
              <Link href="/">
                <a className="movie-name font-weight-bold">{movie.name}</a>
              </Link>
            </h4>
            <div className="movie-genre text-muted mb-1">{movie.genre}</div>
            <p className="card-text">{shorten(movie.description, 40)}</p>
          </div>
          <div className="card-footer">
            <small className="text-muted">{movie.rating}</small>
          </div>
        </div>
      </div>
    );
  });
};

export default MovieList;
