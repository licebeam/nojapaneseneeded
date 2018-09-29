import React, { Component } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Body from './components/Body';
import JobPage from './components/JobPage';
import styled from 'styled-components';
import './index.css';
import {
  BrowserRouter as Router,
  Route,
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
        job: {
          title: 'Google',
          description: 'Engineer',
          location: 'Tokyo',
          date: 'Sep 1',
          logo: 'https://zdnet1.cbsistatic.com/hub/i/2015/09/01/cb834e24-18e7-4f0a-a9bf-4c2917187d3f/83bb139aac01023dbf3e55a3d1789ad8/google-new-logo.png',
          details: ' 100 years of experience with react',
          visa: 'Visa Sponsorship Available',
          apply: 'https://www.google.com',
          category: "Programming",
          fresh: true
        },
        id: 1
      },
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
            {this.state.jobPosts.map(job => {
              return <Route exact path={'/Job/' + job.id} render={() =>
                <JobPage job={job} />
              }
              />
            })}
            < Footer />
          </div >
        </Router >
      </Container>

    );
  }
}

export default MainContainer;
