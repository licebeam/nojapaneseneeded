import React, { Component } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Body from './components/Body';
import styled from 'styled-components';
import './index.css';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  overflow: auto;
`
class MainContainer extends Component {
  state = {
    jobPosts: [
      {
        job: { title: 'Google', description: 'Engineer', location: 'Tokyo', date: 'Sep 1', logo: 'https://zdnet1.cbsistatic.com/hub/i/2015/09/01/cb834e24-18e7-4f0a-a9bf-4c2917187d3f/83bb139aac01023dbf3e55a3d1789ad8/google-new-logo.png', fresh: true },
        id: 1
      },
      {
        job: { title: 'Supreme', description: 'Marketing Director', location: 'Kanagawa', date: 'Sep 2', logo: 'https://static.highsnobiety.com/wp-content/uploads/2018/01/16110157/supreme-box-logo-00.jpg', fresh: false },
        id: 2
      },
      {
        job: { title: 'Supreme', description: 'Marketing Director', location: 'Tokyo', date: 'Sep 10', logo: 'https://static.highsnobiety.com/wp-content/uploads/2018/01/16110157/supreme-box-logo-00.jpg', fresh: false },
        id: 2
      },
      {
        job: { title: 'Supreme', description: 'Marketing Director', location: 'Tokyo', date: 'Sep 20', logo: 'https://static.highsnobiety.com/wp-content/uploads/2018/01/16110157/supreme-box-logo-00.jpg', fresh: false },
        id: 2
      }
    ]
  }
  render() {
    return (
      <Container>
        <Router>
          <div>
            <Header />
            <Route exact path="/" render={() =>
              <Body jobPosts={this.state.jobPosts} />
            }
            />
            < Footer />
          </div >
        </Router >
      </Container>

    );
  }
}

export default MainContainer;
