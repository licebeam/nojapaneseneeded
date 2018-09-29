import React, { Component } from 'react';
import JobPost from './JobPost';
import styled from 'styled-components';

const JobPosterContainer = styled.div`
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
    input{
      height: 40px;
      font-size: 1rem;
      margin-bottom: 30px;
    }
    textarea{
       height: 200px;
      font-size: 1rem;
      margin-bottom: 30px;
    }
    button{
      border-radius: 30px;
      width: 100px;
      height: 40px;
      background-color: red;
      color: whitesmoke;
      text-align: center;
      align-self: center;
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
            alert('posted job');
            // postNewJob({
            //   job: {
            //     title: this.state.jobTitle,
            //     description: this.state.positionTitle,
            //     location: this.state.location,
            //     date: date,
            //     logo: this.state.logoUrl,
            //     details: this.state.details,
            //     visa: this.state.visa,
            //     apply: this.state.applyUrl,
            //     category: this.state.category,
            //     fresh: false
            //   },
            //   id: Math.random().toString(36).replace(/[^a-z]+/g, '').substr(2, 10) + Date.now(),
            // })
          }}>Post Job</button>
        </div>
      </JobPosterContainer >
    );
  }
}

export default JobPoster;
