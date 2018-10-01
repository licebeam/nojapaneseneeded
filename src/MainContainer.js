import React, { Component } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Body from './components/Body';
import JobPage from './components/JobPage';
import JobPoster from './components/JobPoster'
import styled from 'styled-components';
import posed, { PoseGroup } from 'react-pose';
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
// Stripe.setPublishableKey('pk_test_CWyqPoVSOaiho82ozXTYlPEx');

firebase.initializeApp(config);
const uiConfig = {
  signInFlow: 'popup',
  signInSuccessUrl: '/Home',
  signInOptions: [
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    firebase.auth.FacebookAuthProvider.PROVIDER_ID
  ]
};
const firestore = firebase.firestore();
const settings = {/* your settings... */ timestampsInSnapshots: true };
firestore.settings(settings);
var db = firebase.firestore();


const Container = styled.div`
  display: flex;
  flex-direction: column;
  overflow: auto; 
`
const RoutesContainer = posed.div({
  enter: { y: 0, opacity: 1, delay: 100, beforeChildren: true },
  exit: {
    y: 50,
    opacity: 0,
    transition: { duration: 200 }
  }
});
class MainContainer extends Component {
  state = {
    isVisible: false,
    jobPosts: [
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
          category: "",
          fresh: false
        },
        id: 1
      },
    ]
  }

  componentDidMount() {
    this.getJobPosts();
    setTimeout(() => {
      this.setState({
        isVisible: !this.state.isVisible
      });
    }, 500);
  }

  getJobPosts = () => {
    db.collection("jobs")
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          this.setState({ jobPosts: doc.data().jobPosts })
        });
      })
      .catch(function (error) {
        console.log("Error getting documents: ", error);
      });
  }

  postNewJob = (jobObject) => {
    db.collection('jobs').doc('jobdoc').update({
      jobPosts: firebase.firestore.FieldValue.arrayUnion(jobObject)
    })
  }

  render() {
    const { isVisible } = this.state;
    return (
      <Container>
        <Router onUpdate={() => window.scrollTo(0, 0)}>
          <Route
            render={({ location }) => (
              <div>
                <Header />
                <PoseGroup>
                  {isVisible && [
                    <RoutesContainer key={location.key}>
                      <Route exact path="/Post" render={(location) =>
                        <JobPoster postNewJob={this.postNewJob} />
                      }
                      />

                      <Route exact path="/" render={() =>
                        <Body jobPosts={this.state.jobPosts} />
                      }
                      />
                      {this.state.jobPosts ? this.state.jobPosts.map(job => {
                        return <Route exact path={'/Job/' + job.id} render={() =>
                          <JobPage job={job} />
                        }
                        />
                      }) : null}
                    </RoutesContainer>
                  ]}
                </PoseGroup >
                < Footer />
              </div >
            )}
          />
        </Router >
      </Container>


    );
  }
}

export default MainContainer;
