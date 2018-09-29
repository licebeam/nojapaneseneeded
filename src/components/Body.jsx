import React, { Component } from 'react';
import JobPost from './JobPost';
import styled from 'styled-components';

const BodyContainer = styled.div`
  background-color: whitesmoke;
  .hero-section{
    height: 200px;
    text-align: center;
    padding: 80px;
    background-image: url('https://images.pexels.com/photos/161309/traditional-and-technology-zojoji-temple-tokyo-culture-161309.jpeg');
  }
`
class Body extends Component {
  render() {
    const { jobPosts } = this.props
    const filteredJobPosts = jobPosts; //change later for search bar
    return (
      <BodyContainer>
        <div className="hero-section">
          <div>No Japanese Needed</div>
          <div>Looking for a job in Japan but your Japanese skills aren't up to snuff?</div>
        </div>
        {filteredJobPosts.map(job => (
          <JobPost job={job} />
        ))}
      </BodyContainer>
    );
  }
}

export default Body;
