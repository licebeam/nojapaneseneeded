import React, { Component } from 'react';
import styled from 'styled-components';

const FooterContainer = styled.div`
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
        <div className='footer-text'>Hey hey</div>
      </FooterContainer>
    );
  }
}

export default Footer;
