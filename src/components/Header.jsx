import React, { Component } from 'react';
import styled from 'styled-components';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

const HeaderBody = styled.div`
  background-color: black;
  color: white;
  display: flex;
  font-size: 1rem;
  flex-direction: row;
    a{
    text-decoration: none !important;
   }
  .header-title{
    font-family: 'Roboto', sans-serif;
    font-weight: bold;
    color: white;
    padding: 10px;
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
        <Link to='/'>
          <div className="header-title">NJN</div>
        </Link>
        <div className="nav">
          <div className="nav-item">Categories</div>
          <div className="nav-item">Community</div>
          <Link to='/Post'>
            <div className="nav-item">Post a Job</div>
          </Link>
        </div>
      </HeaderBody>
    );
  }
}

export default Header;
