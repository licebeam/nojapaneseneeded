import React, { Component } from 'react';
import styled from 'styled-components';

const FooterContainer = styled.div`
@media (min-width: 800px) {
  width: 60%;
  margin: 0 auto;
  }
  height: 200px;
  background-color: black;
  color: whitesmoke;
  .footer-text{
    padding: 40px;
  }
`
class Footer extends Component {
  render() {
    return (
      <FooterContainer>
        <div className='footer-text'>No Japanese Needed 2018</div>
      </FooterContainer>
    );
  }
}

export default Footer;
