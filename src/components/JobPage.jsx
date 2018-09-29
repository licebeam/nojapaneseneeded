import React, { Component } from 'react';
import JobPost from './JobPost';
import styled from 'styled-components';

const JobPageContainer = styled.div`
  background-color: whitesmoke;
  .top-section{
    height: 100%;
    padding: 20px;
    .title{
      font-size: 2rem;
    }
      .logo{
    border-radius: 50%;
    height: 60px;
    width: 60px;
    overflow: hidden;
    .image{
      object-fit: cover;
      height: 60px;
      width: 60px;
    }
  }
  .description{
      font-size: 1.5rem;
    }
  .location{
    font-size: 1.5rem;
  }
  .date{
    font-size: 1.5rem;
  }
  .category{
    font-size: .8rem;
  }
  }
`
class JobPage extends Component {
  render() {
    const { job } = this.props
    return (
      <JobPageContainer>
        <div className="top-section">
          <div className='title'>{job.job.title}</div>
          <div className="logo">
            <img className="image" src={job.job.logo} alt={job.job.title} />
          </div>
          <div className='description'>{job.job.description}</div>
          <div className="category">{job.job.category}</div>
          <div className='location'>{job.job.location}</div>
          <p>date posted:</p>
          <div className='date'>{job.job.date}</div>
          <h2>What we are looking for:</h2>
          <div>
            {job.job.details}
          </div>
          <h2>Visa Requirements:</h2>
          <div>
            {job.job.visa}
          </div>
          <h2>Apply:</h2>
          <div>
            <a target="_blank" href={job.job.apply}>{job.job.apply}</a>
          </div>
        </div>
      </JobPageContainer >
    );
  }
}

export default JobPage;
