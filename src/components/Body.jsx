import React, { Component } from 'react';
import JobPost from './JobPost';

class Body extends Component {
  render() {
    const { jobPosts } = this.props
    const filteredJobPosts = jobPosts; //change later for search bar
    return (
      <div className="Body">
        <div className="hero-section">No Japanese Needed</div>
        {filteredJobPosts.map(job => (
          <JobPost />
        ))}
      </div>
    );
  }
}

export default Body;
