import React, { Component } from 'react';
import JobPost from './JobPost';
import styled from 'styled-components';

const JobPageContainer = styled.div`
  background-color: whitesmoke;
  .top-section{
    height: 200px;
  }
`
class JobPage extends Component {
  render() {
    const { jobPosts } = this.props
    const filteredJobPosts = jobPosts; //change later for search bar
    return (
      <JobPageContainer>
        <div className="top-section">
          <div className='top-title'>No Japanese Needed</div>
          <div className='top-subtext'>Looking for a job in Japan but your Japanese skills aren' t up to snuff?</div>
          <div className='ad-container'>Post a Job?</div>
        </div>
      </JobPageContainer >
    );
  }
}

export default JobPage;
