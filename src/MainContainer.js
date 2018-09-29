import React, { Component } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import styled from 'styled-components';
import './index.css';

const Container = styled.div`
  display: flex;
  flex-direction: column;
`
class MainContainer extends Component {
  render() {
    return (
      <Container>
        <Header />
        <Footer />
      </Container>
    );
  }
}

export default MainContainer;
