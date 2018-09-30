import React, { Component } from 'react';
import styled from 'styled-components';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

const HeaderBody = styled.div`
@media (min-width: 800px) {
  width: 60%;
  margin: 0 auto;
  }
  background-color: whitesmoke;
  color: black;
  display: flex;
  font-size: 1rem;
  flex-direction: row;
    a{
    text-decoration: none !important;
   }
  .header-title{
    flex: 4;
    font-family: 'Archivo Black', sans-serif;
    font-weight: bold;
    color: black;
    padding: 10px;
    font-size: 2rem;
    transition: .2s all;
    &:hover{
        color: red;
      }
  }
  .nav{
    flex:1;
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
          <div className="header-title">No Japanese Needed</div>
        </Link>
        <div className="nav">
          {/* <div className="nav-item">Categories</div>
          <div className="nav-item">Community</div> */}
          <Link to='/Post'>
            <div className="nav-item">Post a Job</div>
          </Link>
        </div>
      </HeaderBody>
    );
  }
}

export default Header;
