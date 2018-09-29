import React, { Component } from 'react';
import styled from 'styled-components';

const HeaderBody = styled.div`
  background-color: whitesmoke;
  color: black;
  display: flex;
  font-size: 1rem;
  flex-direction: row;
  .header-title{
    padding: 10px;
    font-weight: bold;
    font-size: 1.2rem;
  }
  .nav{
    display: flex;
    flex-direction: row;
    align-items: center;
    .nav-item{
      flex: 1;
      padding: 10px;
      &:hover{
        color: red;
      }
    }
  }
`

class Header extends Component {
  render() {
    return (
      <HeaderBody className="Header-header">
        <div className="header-title">NJN</div>
        <div className="nav">
          <div className="nav-item">test</div>
          <div className="nav-item">test</div>
        </div>
      </HeaderBody>
    );
  }
}

export default Header;
