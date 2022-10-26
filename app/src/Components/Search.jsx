import React from "react";
import "../index.css";
export default class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: "panda",
      type: "all",
    };
  }
  handleClick = (e) => {
    if (e.key === "Enter") {
      this.props.searchMovies(this.state.search, this.state.type);
    }
  };
  handleSubmit = () => {
    this.props.searchMovies(this.state.search, this.state.type);
  };
  checkCategory = (e) => {
    this.setState(
      () => ({ type: e.target.dataset.type }),
      () => {
        this.props.searchMovies(this.state.search, this.state.type);
      }
    );
  };
  render() {
    return (
      <div className="row input">
        <div className="col s12">
          <div className="input-field ">
            <input
              type="email"
              className="validate"
              placeholder="Search..."
              value={this.state.search}
              onChange={(e) => this.setState({ search: e.target.value })}
              onKeyDown={this.handleClick}
            />
          </div>
        </div>
        <button className="button" onClick={this.handleSubmit}>
          Search...
        </button>
        <label>
          <input
            className="with-gap "
            data-type="all"
            name="type"
            type="radio"
            checked={this.state.type === "all"}
            onChange={this.checkCategory}
          />
          <span>all</span>
        </label>
        <label>
          <input
            className="with-gap "
            name="type"
            data-type="movie"
            type="radio"
            checked={this.state.type === "movie"}
            onChange={this.checkCategory}
          />
          <span>Movies only</span>
        </label>
        <label>
          <input
            className="with-gap "
            name="type"
            data-type="series"
            type="radio"
            checked={this.state.type === "series"}
            onChange={this.checkCategory}
          />
          <span>Series only</span>
        </label>
      </div>
    );
  }
}
