export default function Movie(props) {
  const { Title, Year, imdbID, Type, Poster } = props;
  return (
    <div key={imdbID}>
      <div className="col s12 m6">
        <div className="card">
          <div className="card-image">
            <img alt="img" src={Poster} />
            <span className="card-title">{Title}</span>
          </div>
          <div className="card-content">
            <p>
              {Year} and {Type}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
