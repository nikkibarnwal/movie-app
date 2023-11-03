import MovieList from "./MovieList";
import Navbar from "./Navbar";
import { Moviedata } from "./Moviedata";
import { Component } from "react";
class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: Moviedata,
      cartCount: 0,
    };
  }
  handleIncStar = (movie) => {
    const { movies } = this.state;

    const mid = this.state.movies.indexOf(movie);
    if (movies[mid].stars >= 5) {
      return;
    }
    movies[mid].stars += 0.5;

    this.setState({
      //  movies:movies
      movies,
    });
  };

  handleDecStar = (movie) => {
    const { movies } = this.state;

    const mid = this.state.movies.indexOf(movie);
    if (movies[mid].stars <= 0) {
      return;
    }
    movies[mid].stars -= 0.5;
    this.setState({
      movies,
    });
  };

  handleToggelFav = (movie) => {
    const { movies } = this.state;
    const mid = movies.indexOf(movie);
    movies[mid].fav = !movies[mid].fav;

    this.setState({
      movies,
    });
  };

  handleToggleCart = (movieSelected) => {
    let { movies, cartCount } = this.state;
    const mid = movies.indexOf(movieSelected);
    movies[mid].cart = !movies[mid].cart;
    if (movies[mid].cart) {
      cartCount++;
    } else {
      cartCount > 0 && cartCount--;
    }
    console.log("Cart Count ", cartCount);
    this.setState({
      movies,
      cartCount,
    });
  };

  render() {
    const { movies, cartCount } = this.state;
    return (
      <>
        <Navbar cartCount={cartCount} />
        <MovieList
          movies={movies}
          addStars={this.handleIncStar}
          subStars={this.handleDecStar}
          toggleFav={this.handleToggelFav}
          toggleCart={this.handleToggleCart}
        />
      </>
    );
  }
}

//if we forget to pass the props in the component it will take the default
//props, simillerly for marks or anything else

export default App;
