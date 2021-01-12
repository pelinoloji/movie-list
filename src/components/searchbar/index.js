import React from "react";
import styled from "styled-components";

import * as colors from "../../colors";
import SearchIcon from "../../images/search-icon-yellow.png";
import CalendarIcon from "../../images/year-icon.png";

export default class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { text: "", clicked: false };
  }

  componentDidMount() {
    this.state = {
      text: "",
      clicked: true
    };
  }

  render() {
    return (
      <SearchBarWrapper>
        <SearchInputArea>
          <InputIcon src={SearchIcon} />
          <InputArea type="text" id="search" placeholder="Search movie" />
        </SearchInputArea>
        <br />
        <SearchInputArea>
          <InputIcon src={CalendarIcon} />
          <InputArea
            type="text"
            id="release-date"
            placeholder="Year of release"
          />
        </SearchInputArea>
      </SearchBarWrapper>
    );
  }
}

const SearchBarWrapper = styled.div`
  position: flex;
`;

const SearchInputArea = styled.div`
  border-bottom: 2px solid ${colors.primaryColor};
`;

const InputIcon = styled.img`
  img-align: bottom;
`;

const InputArea = styled.input`
  margin-left: 15px;
  border: none;
  font-size: 1.2em;

  ::placeholder {
    color: ${colors.primaryColor};
  }
`;
