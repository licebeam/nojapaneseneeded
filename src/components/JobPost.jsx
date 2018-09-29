import React, { Component } from 'react';
import styled from 'styled-components'

const Job = styled.div`
  flex:1;
  background-color: whitesmoke;
  height: 100px;
  padding: 10px;
  border-bottom: 2px solid grey;
`
class JobPost extends Component {
  render() {
    const { job } = this.props
    console.log(job)
    return (
      <Job>
        <h4>{job.job.title}</h4>
        <div>{job.job.description}</div>
      </Job>
    );
  }
}

export default JobPost;
