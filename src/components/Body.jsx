import React, { Component } from 'react';
import JobPost from './JobPost';
import styled from 'styled-components';
import photo from './photo.jpg'

const BodyContainer = styled.div`
@media (min-width: 800px) {
  width: 80%;
  margin: 0 auto;
  }
  background-color: whitesmoke;
  .hero-section{
    height: 200px;
    text-align: center;
    padding: 80px;
    background-image: url(${photo});
    background-size: cover;
    background-repeat: no-repeat;
    font-size: 1rem;
    color: whitesmoke;
  }
`
class Body extends Component {
  render() {
    const { jobPosts } = this.props
    const filteredJobPosts = jobPosts; //change later for search bar
    return (
      <BodyContainer>
        <div className="hero-section">
          <div className='hero-title'>No Japanese Needed</div>
          <div className='hero-subtext'>Looking for a job in Japan but your Japanese skills aren' t up to snuff?</div>
          <div className='ad-container'>Post a Job?</div>
        </div>
        {
          filteredJobPosts.map(job => (
            <JobPost job={job} />
          ))
        }
      </BodyContainer >
    );
  }
}

export default Body;
