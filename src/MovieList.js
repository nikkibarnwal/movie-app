import { Component } from "react";
import MovieCard from "./Moviecard";
class MovieList extends Component {
  render() {
    const { movies, addStars, subStars, toggleFav, toggleCart } = this.props;

    return (
      <>
        {movies.map((movie) => (
          <MovieCard
            movies={movie}
            addStars={addStars}
            subStars={subStars}
            favHandler={toggleFav}
            cartHandler={toggleCart}
            key={movie.id}
          />
        ))}

        {/* <MovieCard movies={this.state}/> */}
      </>
    );
  }
}
export default MovieList;
