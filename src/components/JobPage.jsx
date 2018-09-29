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
          <p>job title:</p>
          <div className='description'>{job.job.description}</div>
          <p>location:</p>
          <div className='location'>{job.job.location}</div>
          <p>date posted:</p>
          <div className='date'>{job.job.date}</div>
          <p>details:</p>
          <div>
            {job.job.details}
          </div>
          <p>visa requirements:</p>
          <div>
            {job.job.visa}
          </div>
          <p>application link:</p>
          <div>
            {job.job.apply}
          </div>
        </div>
      </JobPageContainer >
    );
  }
}

export default JobPage;
