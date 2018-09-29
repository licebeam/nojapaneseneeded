import React, { Component } from 'react';
import styled from 'styled-components';

const FooterContainer = styled.div`
  height: 200px;
  background-color: darkblue;
`
class Footer extends Component {
  render() {
    return (
      <FooterContainer>
        im the foota
      </FooterContainer>
    );
  }
}

export default Footer;
