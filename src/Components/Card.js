import react from "react";

const Card = (movie) => {
  let img_path = "https://image.tmdb.org/t/p/w500";
  return (
    <>
      <div className="movie image-container">
        <img src={img_path + movie.info.poster_path} className="poster"></img>

        <div className="movie-details">
          <div className="box">
            <h4 className="title">{movie.info.title}</h4>
            <p className="rating">{movie.info.vote_average}</p>
          </div>

          <div className="overview">
            <span className="mr-2">Add to Favourites</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="red"
              class="bi bi-heart-fill"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314"
              />
            </svg>
            <h1>overview</h1>
            {movie.info.overview}
          </div>
        </div>
      </div>
    </>
  );
};
export default Card;
