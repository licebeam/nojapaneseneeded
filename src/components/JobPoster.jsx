import React, { Component } from 'react';
import JobPost from './JobPost';
import styled from 'styled-components';

const JobPosterContainer = styled.div`
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
      font-size: 2rem;
      padding: 10px;
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
    font-size: 1.5rem;
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
class JobPoster extends Component {
  state = {
    newPost:
      {
        job: {
          title: '',
          description: '',
          location: '',
          date: '',
          logo: '',
          details: '',
          visa: '',
          apply: '',
          category: '',
          fresh: false
        },
        id: Math.random().toString(36).replace(/[^a-z]+/g, '').substr(2, 10) + Date.now(),
      },
  }
  render() {
    const { job, postNewJob } = this.props
    return (
      <JobPosterContainer>
        <div className="top-section">
          <button onClick={() => { console.log('postin'), postNewJob(this.state.newPost) }}>Post Job</button>
        </div>
      </JobPosterContainer >
    );
  }
}

export default JobPoster;
