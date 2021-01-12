import React from "react";
import styled, { css } from "styled-components";
import * as colors from "../../colors";
import SearchBar from "../../components/searchbar";

export default class SearchFilters extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchKey: "",
      showGenres: false,
      showRates: false,
      showLanguage: false,
    };
  }

  flipShowGenres() {
    this.setState({ showGenres: !this.state.showGenres });
  }

  flipShowRates() {
    this.setState({ showRates: !this.state.showRates });
  }

  flipShowLanguages() {
    this.setState({ showLanguage: !this.state.showLanguage });
  }

  render() {
    const { genres, ratings, languages, searchMovies } = this.props;

    return (
      <FiltersWrapper>
        <SearchFiltersCont className="search_inputs_cont" marginBottom>
          <SearchBar />
        </SearchFiltersCont>
        <SearchFiltersCont>
          <CategoryTitle>Movie</CategoryTitle>
        </SearchFiltersCont>

        <SearchFiltersCont>
          <CategoryTitle onClick={() => this.flipShowGenres()}>
            {this.state.showGenres ? "-" : "+"} Select genres
          </CategoryTitle>
          {this.state.showGenres
            ? genres.map((genre) => (
                <CategoryItems>
                  <CategoryLabel htmlFor={genre.id}>
                    <CategoryInput
                      type="checkbox"
                      id={genre.id}
                      value={genre.id}
                    />
                    {genre.name}
                  </CategoryLabel>
                </CategoryItems>
              ))
            : null}
        </SearchFiltersCont>

        <SearchFiltersCont>
          <CategoryTitle onClick={() => this.flipShowRates()}>
            {this.state.showRates ? "-" : "+"} Select min. vote
          </CategoryTitle>
          {this.state.showRates
            ? ratings.map((rate) => (
                <CategoryItems>
                  <CategoryLabel htmlFor={rate.id}>
                    <CategoryInput
                      type="checkbox"
                      id={rate.id}
                      value={rate.id}
                    />
                    {rate.name}
                  </CategoryLabel>
                </CategoryItems>
              ))
            : null}
        </SearchFiltersCont>

        <SearchFiltersCont>
          <CategoryTitle onClick={() => this.flipShowLanguages()}>
            {this.state.showLanguage ? "-" : "+"} Select language
          </CategoryTitle>
          {this.state.showLanguage
            ? languages.map((language) => (
                <CategoryItems>
                  <CategoryLabel htmlFor={language.id}>
                    <CategoryInput
                      type="checkbox"
                      id={language.id}
                      value={language.id}
                    />{" "}
                    {language.name}
                  </CategoryLabel>
                </CategoryItems>
              ))
            : null}
        </SearchFiltersCont>
      </FiltersWrapper>
    );
  }
}

const FiltersWrapper = styled.div`
  position: flex;
  margin: 20px 45px 15px 15px;
`;

const SearchFiltersCont = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 3px;
  transition: all 0.3s ease-in-out;
  width: 100%;
  ${(props) =>
    props.marginBottom &&
    css`
      margin-bottom: 15px;
    `}
`;

const CategoryTitle = styled.div`
  width: 220px;
  font-size: 1em;
  font-weight: 700;
  cursor: pointer;
  color: ${colors.fontColor};
`;

const CategoryItems = styled.div`
  font-size: 1.1em;
  margin: 7px;
`;

const CategoryInput = styled.input`
  height: 15px;
  width: 15px;
  border: none;
  margin-right: 10px;
`;

const CategoryLabel = styled.label`
  bottom: 0;
  display: flex;
`;
