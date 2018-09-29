import React, { Component } from 'react';
import JobPost from './JobPost';
import styled from 'styled-components';

const BodyContainer = styled.div`
  background-color: whitesmoke;
  .hero-section{
    height: 200px;
    text-align: center;
    padding: 20px;
  }
`
class Body extends Component {
  render() {
    const { jobPosts } = this.props
    const filteredJobPosts = jobPosts; //change later for search bar
    return (
      <BodyContainer>
        <div className="hero-section">No Japanese Needed</div>
        {filteredJobPosts.map(job => (
          <JobPost job={job} />
        ))}
      </BodyContainer>
    );
  }
}

export default Body;
