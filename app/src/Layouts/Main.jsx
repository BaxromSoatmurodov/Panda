import "../index.css";
import Movies from "../Components/movies";
import React from "react";
import Loader from "../Components/Loader";
import Search from "../Components/Search";
export default class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      isloading: false,
    };
  }
  componentDidMount() {
    fetch("http://www.omdbapi.com/?apikey=3d0ea6e5&s=panda")
      .then((data) => data.json())
      .then((data) => this.setState({ movies: data.Search }));
  }
  searchMovies = (str, type = "movie") => {
    this.setState({ isloading: true });
    fetch(
      `http://www.omdbapi.com/?apikey=3d0ea6e5&s=${str}&type=
      ${type !== "all" ? `${type}` : ""}`
    )
      .then((data) => data.json())
      .then((data) => this.setState({ movies: data.Search, isloading: false }));
  };
  render() {
    return (
      <div className="container">
        <Search searchMovies={this.searchMovies} />
        {this.state.isloading ? (
          <Loader />
        ) : (
          <Movies movies={this.state.movies} />
        )}
      </div>
    );
  }
}
