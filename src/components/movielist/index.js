import React from "react";
import styled from "styled-components";
import * as colors from "../../colors";

export default class MovieList extends React.Component {
  render() {
    const { movies, genres } = this.props;

    return (
      <MoviesWrapper>
        {movies.map((movie) => (
          <Movies key={movie.id}>
            <MovieItems>
              <MovieImageArea>
                <MovieImages
                  src={`https://image.tmdb.org/t/p/w300_and_h450_bestv2${movie.poster_path}`}
                />
              </MovieImageArea>
              <MovieDetails>
                <MovieReleaseDate>{movie.release_date}</MovieReleaseDate>
                <MovieRate>{movie.vote_average}</MovieRate>
                <MovieTitle>{movie.title}</MovieTitle>
                <div>{/*movie.genre_ids.filter(genreId => genreId)*/}</div>
                <MovieOverview>{movie.overview}</MovieOverview>
              </MovieDetails>
            </MovieItems>
          </Movies>
        ))}
      </MoviesWrapper>
    );
  }
}

const MoviesWrapper = styled.div`
  position: flex;
`;
const Movies = styled.div`
  border: 1px solid white;
  margin-bottom: 15px;
  background-color: white;
`;
const MovieItems = styled.div`
  margin: 15px;
  display: flex;
  width: 700px;
`;

const MovieImageArea = styled.div``;

const MovieImages = styled.img``;

const MovieDetails = styled.div`
  margin-left: 20px;
  position: relative;
`;

const MovieRate = styled.div`
  color: white;
  background: ${colors.primaryColor};
  padding: 5px;
  border-radius: 5px;
  position: absolute;
  right: 0;
  display: inline;
`;

const MovieTitle = styled.span`
  top: 20px;
  font-size: 30px;
  font-weight: 800;
  position: flex;
`;

const MovieOverview = styled.p``;

const MovieReleaseDate = styled.span`
  bottom: 0;
  position: absolute;
`;
