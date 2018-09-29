import React, { Component } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Body from './components/Body';
import styled from 'styled-components';
import './index.css';

const Container = styled.div`
  display: flex;
  flex-direction: column;
`
class MainContainer extends Component {
  state = { jobPosts: [{ job: { title: 'test' }, id: 1 }] }
  render() {
    return (
      <Container>
        <Header />
        <Body jobPosts={this.state.jobPosts} />
        <Footer />
      </Container>
    );
  }
}

export default MainContainer;
