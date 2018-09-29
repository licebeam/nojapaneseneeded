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
    jobTitle: '',
    positionTitle: '',
    location: '',
    logoUrl: '',
    details: '',
    visa: '',
    applyUrl: '',
    category: '',
  }
  render() {
    const { job, postNewJob } = this.props
    console.log(this.state.jobTitle)
    const date = new Date().toLocaleDateString();
    return (
      <JobPosterContainer>
        <div className="top-section">
          <div>Add a new job</div>
          <div>Company Name</div>
          <input type="text" onChange={(e) => { this.setState({ jobTitle: e.target.value }) }} />
          <div>Job Title</div>
          <input type="text" onChange={(e) => { this.setState({ positionTitle: e.target.value }) }} />
          <div>Location</div>
          <input type="text" onChange={(e) => { this.setState({ location: e.target.value }) }} />
          <div>Logo</div>
          <input type="text" onChange={(e) => { this.setState({ logoUrl: e.target.value }) }} />
          <div>Details</div>
          <textarea type="text" onChange={(e) => { this.setState({ details: e.target.value }) }} />
          <div>Visa Info</div>
          <input type="text" onChange={(e) => { this.setState({ visa: e.target.value }) }} />
          <div>Apply</div>
          <input type="text" onChange={(e) => { this.setState({ applyUrl: e.target.value }) }} />
          <div>Category</div>
          <input type="text" onChange={(e) => { this.setState({ category: e.target.value }) }} />
          <button onClick={() => {
            console.log('postin'),
              postNewJob({
                job: {
                  title: this.state.jobTitle,
                  description: this.state.positionTitle,
                  location: this.state.location,
                  date: date,
                  logo: this.state.logoUrl,
                  details: this.state.details,
                  visa: this.state.visa,
                  apply: this.state.applyUrl,
                  category: '',
                  fresh: false
                },
                id: Math.random().toString(36).replace(/[^a-z]+/g, '').substr(2, 10) + Date.now(),
              })
          }}>Post Job</button>
        </div>
      </JobPosterContainer >
    );
  }
}

export default JobPoster;
