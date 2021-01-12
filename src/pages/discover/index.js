import React from "react";
import styled from "styled-components";

import * as colors from "../../colors";
import Fetcher from "../../fetcher";

import SearchFilters from "../../components/searchfilter";
import MovieList from "../../components/movielist";
import { getMovies, getMovieGenres } from "../../fetcher";

export default class Discover extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      keyword: "",
      year: 0,
      results: [],
      movieDetails: null,
      totalCount: 0,
      genreOptions: [],
      ratingOptions: [
        { id: 7.5, name: 7.5 },
        { id: 8, name: 8 },
        { id: 8.5, name: 8.5 },
        { id: 9, name: 9 },
        { id: 9.5, name: 9.5 },
        { id: 10, name: 10 },
      ],
      languageOptions: [
        { id: "GR", name: "Greek" },
        { id: "EN", name: "English" },
        { id: "RU", name: "Russian" },
        { id: "PO", name: "Polish" },
      ],
    };
  }

  componentDidMount() {
    getMovieGenres()
      .then((response) => {
        const genres = response.data.genres || [];
        this.setState({ genreOptions: genres });
        console.log(genres);
      })
      .catch((error) => console.log(error, "error"));
    getMovies()
      .then((response) => {
        const movies = response.data.results || [];
        const moviesLength = response.data.total_results;
        this.setState({ results: movies, totalCount: moviesLength }, () =>
          console.log(movies)
        );
      })
      .catch((error) => console.log(error, "error"));
  }

  render() {
    const {
      genreOptions,
      languageOptions,
      ratingOptions,
      totalCount,
      results,
      movieDetails,
    } = this.state;

    return (
      <DiscoverWrapper>
        <MobilePageTitle></MobilePageTitle>

        <MovieResults>
          {totalCount > 0 && <TotalCounter>{totalCount} results</TotalCounter>}
          <MovieList movies={results || []} genres={genreOptions || []} />
        </MovieResults>

        <MovieFilters>
          <SearchFilters
            genres={genreOptions}
            ratings={ratingOptions}
            languages={languageOptions}
            searchMovies={(keyword, year) => this.searchMovies(keyword, year)}
          />
        </MovieFilters>
      </DiscoverWrapper>
    );
  }
}

const DiscoverWrapper = styled.div`
  margin: 35px;
  display: flex;
`;

const TotalCounter = styled.div`
  font-weight: 900;
`;

const MovieResults = styled.div``;

const MovieFilters = styled.div``;

const MobilePageTitle = styled.header``;
