import React, { Component } from 'react';
import styled from 'styled-components'

const Job = styled.div`
  background-color: whitesmoke;
  height: 100px;
  padding: 10px;
  border-bottom: 2px solid grey;
  display: flex;
  flex-direction: column;
  .top{  
    display: flex;
    flex-direction: row; 
    align-items: center;
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
   .title{
      font-size: 1.5rem;
      padding: 10px;
    }
    .description{
      color: grey;
    }
  }
  .bottom{
    display: flex;
    flex-direction: row; 
    padding: 20px;
    align-items: center;
    .location{
       font-size: 1.2rem;
        flex: 4;
    }
    .date{
      font-size: 1.2rem;
      flex: 1;
    }
    .fresh{
      background-color: red;
      height: 10px;
      width: 30px;
      color: white;
      padding: 10px;
      flex: 1;
    }
  }
 
`
class JobPost extends Component {
  render() {
    const { job } = this.props
    return (
      <Job onClick={() => alert('not available yet')}>
        <div className="top">
          <div className="logo">
            <img className="image" src={job.job.logo} alt={job.job.title} />
          </div>
          <div className="title">{job.job.title}</div>
          <div className="description">{job.job.description}</div>
        </div>
        <div className="bottom">
          <div className="location">{job.job.location}</div>
          <div className="date">{job.job.date}</div>
          <div className="fresh">{job.job.fresh ? 'New' : null}</div>
        </div>
      </Job>
    );
  }
}

export default JobPost;
