import "../index.css";
import Movie from "../Components/movie";
export default function Movies(props) {
  const { movies = [] } = props;
  return (
    <div className="movies">
      {movies.length ? (
        movies.map((movie) => <Movie key={movie.imdbID} {...movie} />)
      ) : (
        <h3>Nothing found</h3>
      )}
    </div>
  );
}
