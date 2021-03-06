import React, { Component } from 'react';
import JobPost from './JobPost';
import styled from 'styled-components';
import photo from './photo.jpg'

const BodyContainer = styled.div`
@media (min-width: 800px) {
  width: 40%;
  margin: 0 auto;
  }
  background-color: whitesmoke;
  .category{
    font-size: 1.3rem;
    color: red;
    margin-top: 80px;
    font-family: 'Archivo Black', sans-serif;
    padding: 10px;
  }
  .hero-section{
    min-height: 100px;
    text-align: center;
    padding: 80px;
    /* background-image: url(${photo}); */
    background-size: cover;
    background-repeat: no-repeat;
    font-size: 1rem;
    color: black;
    .hero-title{
     font-size:  3rem;
     color: red;
     font-family: 'Archivo Black', sans-serif;
     font-weight: bold;
     margin-bottom: 20px
    }
  }
`
class Body extends Component {
  render() {
    const { jobPosts } = this.props
    const filteredJobPosts = jobPosts; //change later for search bar
    return (
      <BodyContainer>
        <div className="hero-section">
          <div className='hero-title'>Find your next job in Japan!</div>
          <div className='hero-subtext'>The best and only job board for people starting out their lives in Japan. If you are still learning Japanese you've come to the right place</div>
          <div className='ad-container'></div>
        </div>
        <div className='category'>Engineering</div>
        {
          filteredJobPosts.map(job => {
            if (job.job.category === 'engineering') return (
              <JobPost job={job} />
            )
          })
        }
        <div className='category'>Education</div>
        {
          filteredJobPosts.map(job => {
            if (job.job.category === 'education') return (
              <JobPost job={job} />
            )
          })
        }
        <div className='category'>Design</div>
        {
          filteredJobPosts.map(job => {
            if (job.job.category === 'design') return (
              <JobPost job={job} />
            )
          })
        }
      </BodyContainer >
    );
  }
}

export default Body;
