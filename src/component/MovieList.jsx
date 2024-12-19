import { useDispatch, useSelector } from 'react-redux';
import { removeMovie } from '../movieSlice';

export default function MovieList() {
  const movies = useSelector((state) => state.computer.movies);

  const dispatch = useDispatch();
  const handleRemoveMovie = (id) => {
    dispatch(removeMovie(id));
  };
  return (
    <div>
      <h1>MovieList</h1>
      {movies.map((movie) => (
        <div key={movie.id}>
          {movie.name}{' '}
          <button onClick={() => handleRemoveMovie(movie.id)}>
            Delete movie
          </button>
        </div>
      ))}
    </div>
  );
}
