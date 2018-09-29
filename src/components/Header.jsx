import React, { Component } from 'react';
import styled from 'styled-components';

const HeaderBody = styled.div`
  background-color: black;
  color: white;
  display: flex;
  flex-direction: row;
  .header-title{
    padding: 10px;
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
        <h3 className="header-title">Job Board</h3>
        <div className="nav">
          <div className="nav-item">test</div>
          <div className="nav-item">test</div>
        </div>
      </HeaderBody>
    );
  }
}

export default Header;
