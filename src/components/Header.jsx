import React, { Component } from 'react';
import styled from 'styled-components';

const HeaderBody = styled.div`
  background-color: black;
`

class Header extends Component {
  render() {
    return (
      <div className="Header">
        <HeaderBody className="Header-header">
          <h1 className="Header-title">Job Board</h1>
        </HeaderBody>
      </div>
    );
  }
}

export default Header;
