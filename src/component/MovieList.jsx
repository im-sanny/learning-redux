import { useSelector } from 'react-redux';

export default function MovieList() {
  const movies = useSelector((state) => state.computer.movies);
  return (
    <div>
      <h1>MovieList</h1>
      {movies.map((movie) => (
        <div key={movie.id}>{movie.name}</div>
      ))}
    </div>
  );
}
