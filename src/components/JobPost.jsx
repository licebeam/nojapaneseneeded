import React, { Component } from 'react';
import styled from 'styled-components'

const Job = styled.div`
  flex:1;
  background-color: whitesmoke;
  height: 100px;
  padding: 10px;
  border-bottom: 2px solid grey;
  display: flex;
  flex-direction: row;
  .logo{
    border-radius: 50%;
    border: 2px solid black;
    height: 40px;
    width: 40px;
    overflow: hidden;
    .image{
      object-fit: cover;
      height: 40px;
      width: 40px;
    }
  }
`
class JobPost extends Component {
  render() {
    const { job } = this.props
    return (
      <Job onClick={() => alert('not available yet')}>
        <div className="logo">
          <img className="image" src={job.job.logo} alt={job.job.title} />
        </div>
        <div className="title">{job.job.title}</div>
        <div className="description">{job.job.description}</div>
        <div className="description">{job.job.location}</div>
        <div className="date">{job.job.date}</div>
        <div className="fresh">{job.job.fresh ? 'New' : null}</div>
      </Job>
    );
  }
}

export default JobPost;
