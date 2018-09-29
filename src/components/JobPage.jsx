import React, { Component } from 'react';
import JobPost from './JobPost';
import styled from 'styled-components';

const JobPageContainer = styled.div`
@media (min-width: 800px) {
  width: 60%;
  margin: 0 auto;
  }
  background-color: whitesmoke;
  .top-section{
    height: 100%;
    padding: 20px;
    display: flex; 
    flex-direction: column;
    margin-bottom: 40px;
    .logo-title{
      margin-top: 20px;
      height: 100px;
      display: flex;
      flex-direction: row;
       align-items: center;
      .title{
      font-size: 1.5rem;
      padding: 10px;
    }
      .logo{
      border-radius: 50%;
      height: 50px;
      width: 50px;
      overflow: hidden;
      .image{
        object-fit: cover;
        height: 50px;
        width: 50px;
      }
    }
    }   
  .description{
    flex: 1;
      margin-top:20px;
      font-size: 1.5rem;
    }
  .location{
    flex: 1;
    margin-top:20px;
    font-size: 1.5rem;
    color: grey;
    margin-bottom: 40px;
  }
  .date{
    font-size: 1rem;
    color: grey;
    padding: 20px;
  }
  .category{
    font-size: .8rem;
  }
  .details{
    min-height: 300px;
  }
  }
`
class JobPage extends Component {
  render() {
    const { job } = this.props
    return (
      <JobPageContainer>
        <div className="top-section">
          <div className="logo-title">
            <div className="logo">
              <img className="image" src={job.job.logo} alt={job.job.title} />
            </div>
            <div className='title'>{job.job.title}</div>
            <div className='date'>{job.job.date}</div>
          </div>
          <div className='description'>{job.job.description}</div>
          <div className="category">{job.job.category}</div>
          <div className='location'>{job.job.location}</div>
          <div className="details">
            <h2>What we are looking for:</h2>
            <div>
              {job.job.details}
            </div>
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
