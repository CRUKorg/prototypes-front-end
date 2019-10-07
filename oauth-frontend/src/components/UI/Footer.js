// @Flow

import React from 'react';
import styled from 'styled-components';
import { BREAKPOINT, COLORS, SITECONFIG, TYPOGRAPHY, UTILITIES } from './Constants';

const StyledFooter = styled.footer`
  background-color: #e3e3e3;
  margin-top: 60px;
  padding-bottom: 50px;
  padding-top: 30px;
`

const StyledContainer = styled.div`
  display: flex;
  font-size: 14px;
  margin: 0 auto;
  max-width: 970px;
  flex-wrap: wrap;
  & > * {
    padding: 0 15px;
    margin: 0;
  }
`

const ImageContainer = styled.div`
  @media (min-width: ${BREAKPOINT.tablet}) {
    width: 16.66667%;
  }
  width: 50%;
`

const Nav = styled.div`
  @media (min-width: ${BREAKPOINT.tablet}) {
    width: 25%;
  }
  width: 50%;
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }
  a {
    color: #2e008b;
    font-weight: bold;
    text-decoration: none;
  }
  a:hover,
  a:focus {
    color: #ec008c;
  }
`
const Copy = styled.p`
  @media (min-width: ${BREAKPOINT.tablet}) {
    width: 41.66667%;
  }
  width: 100%;
`

const  Address = styled.address`
  @media (min-width: ${BREAKPOINT.tablet}) {
    width: 16.66667%;
  }
  font-style: normal;
  width: 100%;
`

class Header extends React.Component<HeaderProps> {

  render() {
    return (
      <StyledFooter>
        <StyledContainer>
          <ImageContainer>
            <img src="https://fundraise.cancerresearchuk.org/profiles/cruk_fundraising/themes/cruk_of_bootstrap/images/fundreg.png" alt="FRSB" />
          </ImageContainer>
          <Nav>
            <ul>
              <li><a href="https://www.cancerresearchuk.org/about-us/contact-us">Contact us</a></li>
              <li><a href="http://www.cancerresearchuk.org/terms-and-conditions/fundraising-platform">Terms &amp; Conditions</a></li>
              <li><a href="https://www.cancerresearchuk.org/support-us/do-your-own-fundraising/practical-fundraising-help/set-up-a-cancer-research-uk-giving-page/fees-and-charges">Fees and charges</a></li>
              <li><a href="http://www.cancerresearchuk.org/privacy-statement">Privacy</a></li>
              <li><a href="http://www.cancerresearchuk.org/terms-and-conditions/cookies-policy">Cookies</a></li>
              <li><a href="http://www.cancerresearchuk.org/accessibility">Accessibility</a></li>
              <li><a href="https://www.cancerresearchuk.org/cancer-research-uk-giving-pages-help" title="">Help</a></li>
            </ul>
          </Nav>
          <Copy>
            Cancer Research UK is a registered charity in England and Wales (1089<span class="disable-detection"></span>464), Scotland (SC041666) and the Isle of Man (1103).
            Registered as a company limited by guarantee in England and Wales No. 4325234.
          </Copy>
          <Address>
            2 Redman Place<br/>
            London<br/>
            E20 1JQ
          </Address>
        </StyledContainer>
      </StyledFooter>
    );
  }
}

export default Header;
