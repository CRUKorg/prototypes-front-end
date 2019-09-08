import React from 'react';
import PropTypes from 'prop-types';
import posed from 'react-pose';
import { StaticQuery, graphql, Link } from 'gatsby';
import styled from 'styled-components';
import Head from 'components/Head';
import Nav from 'components/nav';
import GlobalStyle from 'global.css';
import LogoImg from 'images/logo.png';
import { COLORS, TYPOGRAPHY, UTILITIES } from 'constants/constants';

const AnimatedContainer = posed.div({
  enter: {
    y: 0,
    transition: {
      ease: 'easeInOut',
    },
  },
  exit: {
    y: '-100%',
    transition: {
      ease: 'easeInOut',
    },
  },
});

const Header = styled.header`
  display: flex;
  white-space: nowrap;
  font-family: ${TYPOGRAPHY.fontFamilyHeadings};
  text-transform: uppercase;
  border-bottom: 1px solid ${COLORS.grayLight};
  height: 80px;
  a {
    transition: color 0.2s ease;
    text-decoration: none;
    &:hover {
    }
  }
`;

const Logo = styled.div`
  width: 100%;
  max-width: 320px;
  padding: 16px 32px;
  img {
    height: auto;
    width: auto;
    max-height: 48px;
  }
`;

const Footer = styled.div`
  width: 100%;
  display: block;
  text-align: center;
  padding: ${UTILITIES.spacingUnit * 4}px;
  border-top: 1px solid ${COLORS.grayLight};
  color: ${COLORS.grayLight};
  a {
    font-family: ${TYPOGRAPHY.fontFamilyHeadings};
    text-decoration: none;
    padding: 0 ${UTILITIES.rhythmBase};
  }
  span:last-of-type span {
    display: none;
  }
`;

const Main = styled.div`
  display: block;
  width: 100%;
  height: 100%;
  overflow: hidden;
  padding: 0;
  min-height: calc(100vh - 50px);
  background-color: ${COLORS.grayVLight};
`;

const Ribon = styled.div`
  width: 250px;
  position: fixed;
  top: 50px;
  right: -50px;
  display: block;
  background-color: hsla(324, 100%, 46%, 0.9);
  color: white;
  font-weight: bold;
  text-align: center;
  z-index: 1000;
  transform: rotate(45deg);
  padding: 5px 0;
`;

const Layout = ({ data, children }) => (
  <div>
    <GlobalStyle />
    <Ribon>
      <span role="img" aria-label="waving hands">
        👋
      </span>
      &nbsp;Hi, this is a demo!
    </Ribon>
    <Head />
    <AnimatedContainer>
      <Header>
        <Logo>
          <Link to="/">
            <img src={LogoImg} alt={data.site.siteMetadata.siteTitle} />
          </Link>
        </Logo>
        <Nav />
      </Header>
    </AnimatedContainer>
    <Main>{children}</Main>
    <Footer>
      {data.site.siteMetadata.footerLinks.map(link => (
        <span key={link.name}>
          <a href={link.link} target="_blank" rel="noopener noreferrer">
            {link.name}
          </a>
          <span>|</span>
        </span>
      ))}
    </Footer>
  </div>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  data: PropTypes.object.isRequired,
};

const LayoutWithQuery = props => (
  <StaticQuery
    query={graphql`
      query LayoutQuery {
        site {
          siteMetadata {
            siteTitle
            footerLinks {
              name
              link
            }
          }
        }
      }
    `}
    render={data => <Layout data={data} {...props} />}
  />
);

LayoutWithQuery.propTypes = {
  children: PropTypes.node.isRequired,
};

export default LayoutWithQuery;
