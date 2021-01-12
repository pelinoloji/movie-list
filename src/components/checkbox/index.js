import React from "react";
import styled from "styled-components";
export default class CheckBox extends React.Component {
  // Create a custom checkbox component
  constructor(props) {
    super(props);
  }

  render() {
    return <CheckboxCont></CheckboxCont>;
  }
}

const CheckboxCont = styled.div`
  position: relative;
`;
