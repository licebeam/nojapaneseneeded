import React, { Component } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Body from './components/Body';
import JobPage from './components/JobPage';
import styled from 'styled-components';
import './index.css';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom'
import firebase from 'firebase';

var config = {
  apiKey: "AIzaSyA7tIFKcKtguWWeB38sVqVwlbkjIyMhPrg",
  authDomain: "nojapaneserequired.firebaseapp.com",
  databaseURL: "https://nojapaneserequired.firebaseio.com",
  projectId: "nojapaneserequired",
  storageBucket: "nojapaneserequired.appspot.com",
  messagingSenderId: "821936912941"
};

firebase.initializeApp(config);
// Initialize Cloud Firestore through Firebase
// var ui = new firebaseui.auth.AuthUI(firebase.auth());
// Configure FirebaseUI.
const uiConfig = {
  // Popup signin flow rather than redirect flow.
  signInFlow: 'popup',
  // Redirect to /signedIn after sign in is successful. Alternatively you can provide a callbacks.signInSuccess function.
  signInSuccessUrl: '/Home',
  // We will display Google and Facebook as auth providers.
  signInOptions: [
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    firebase.auth.FacebookAuthProvider.PROVIDER_ID
  ]
};
// The start method will wait until the DOM is loaded

// ui.start('#firebaseui-auth-container', uiConfig);
const firestore = firebase.firestore();
const settings = {/* your settings... */ timestampsInSnapshots: true };
firestore.settings(settings);
var db = firebase.firestore();


const Container = styled.div`
  display: flex;
  flex-direction: column;
  overflow: auto;
`
class MainContainer extends Component {
  state = {
    jobPosts: [
      {
        job: {
          title: 'Google',
          description: 'Engineer',
          location: 'Tokyo',
          date: 'Sep 1',
          logo: 'https://zdnet1.cbsistatic.com/hub/i/2015/09/01/cb834e24-18e7-4f0a-a9bf-4c2917187d3f/83bb139aac01023dbf3e55a3d1789ad8/google-new-logo.png',
          details: '100 years of experience with react',
          visa: 'Visa Sponsorship Available',
          apply: 'https://www.google.com',
          category: "Programming",
          fresh: true
        },
        id: 1
      },
    ]
  }
  componentDidMount() {
    this.getJobPosts();
  }
  getJobPosts = () => {
    console.log('getting jobs')
  }
  render() {
    return (
      <Container>
        <Router>
          <div>
            <Header />
            <Route exact path="/" render={() =>
              <Body jobPosts={this.state.jobPosts} />
            }
            />
            {this.state.jobPosts.map(job => {
              return <Route exact path={'/Job/' + job.id} render={() =>
                <JobPage job={job} />
              }
              />
            })}
            < Footer />
          </div >
        </Router >
      </Container>

    );
  }
}

export default MainContainer;
