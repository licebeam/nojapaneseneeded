import React, { Component } from 'react';
import styled from 'styled-components'

const Job = styled.div`
  background-color: whitesmoke;
  height: 80px;
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
      font-weight: bold;
    }
    .description{
      color: grey;
      font-size: 1rem;
    }
  }
  .bottom{
    display: flex;
    flex-direction: row; 
    padding: 20px;
    align-items: center;
    .location{
       font-size: 0.8rem;
        flex: 3;
    }
    .date{
      font-size: 1rem;
      flex: 1;
    }
    .fresh{
      background-color: red;
      height: 10px;
      width: 20px;
      color: white;
      padding: 10px;
      flex: 1;
      text-align: center;
      border-radius: 20px;
    }
    .old{
      height: 10px;
      width: 20px;
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
          {job.job.fresh ? (
            <div className="fresh">{job.job.fresh ? 'New' : null}</div>
          ) : <div className="old" />}
        </div>
      </Job>
    );
  }
}

export default JobPost;
