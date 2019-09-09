import React from 'react';
import PropTypes from 'prop-types';
import posed from 'react-pose';
import { StaticQuery, graphql, Link } from 'gatsby';
import styled from 'styled-components';
import GlobalStyle from 'global.css';
import Head from 'components/Head';
import LogoImg from 'images/logo.png';
import MEDIA from 'helpers/mediaTemplates';
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
  white-space: nowrap;
  font-family: ${TYPOGRAPHY.fontFamilyHeadings};
  text-transform: uppercase;
  border-bottom: 1px solid ${COLORS.grayLight};
  background-color: ${COLORS.white};
  height: 60px;
  position: relative;
  z-index: 998;
  a {
    transition: color 0.2s ease;
    text-decoration: none;
    &:hover {
    }
  }
  ${MEDIA.TABLET`
    position: fixed;
  width: 100%;
  `};
  ${MEDIA.MIN_TABLET`
    display: flex;
    height: 80px;
  `};
`;

const Logo = styled.div`
  width: 100%;
  padding: 8px 16px;
  img {
    height: auto;
    width: auto;
    max-height: 40px;
  }
  ${MEDIA.MIN_TABLET`
    max-width: 320px;
    padding: 16px 32px;
    img {
      max-height: 48px;
    }
  `};
`;

const TopNav = styled.nav`
  width: 100%;
  position: relative;
  z-index: 999;
  ul {
    list-style: none;
    padding: 0;
    margin: 0;
    text-transform: capitalize;
  }
  a {
    cursor: pointer;
    height: 100%;
  }
  ${MEDIA.TABLET`
    input:checked ~ ul {
      height: auto;
      border-top: 1px solid ${COLORS.grayLight};
      border-bottom: 1px solid ${COLORS.grayLight};
    }
    ul {
      background-color: ${COLORS.white}; 
      height: 0;
      overflow: hidden;
      margin-top: -1px;
    }
    li {
      height: 32px;
    }
    a {
      line-height: 32px;
      padding-left: 16px;
      display: block;
      border-left: 4px solid transparent;
      &:hover {
        border-left: 4px solid #ec008c;
      }
      &.active {
        border-left: 4px solid #ec008c;
        &:hover {
          border-left: 4px solid #2e008b;
        }
      }
    }
  `};
  ${MEDIA.MIN_TABLET`
    ul {
      display: flex;
      align-item: stretch;
      height: 80px;
    }
    li {
      
      & + li {
        margin-left: 32px;
      }
    }
    a {
      height: 100%;
      display: flex;
      align-items: center;
      border-bottom: 4px solid transparent;
      &:hover {
        border-bottom: 4px solid #ec008c;
      }
      &.active {
        border-bottom: 4px solid #ec008c;
        &:hover {
          border-bottom: 4px solid #2e008b;
        }
      }
    }
  `};
`;

const NavCheck = styled.input`
  position: absolute;
  right: 16px;
  top: -45px;
  width: 30px;
  height: 30px;
  display: block;
  z-index: 1000;
  margin: 0;
  padding: 0;
  opacity: 0;
  cursor: pointer;
`;

const NavBtn = styled.div`
  position: absolute;
  right: 16px;
  top: -45px;
  span {
    display: block;
    width: 25px;
    height: 10px;
    border-top: 2px solid ${COLORS.primary};
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
  ${MEDIA.TABLET`
    padding-top: 60px;
  `};
`;

const Ribbon = styled.div`
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
  ${MEDIA.TABLET`
    top: 30px;
    right: -75px;
  `}
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

const Layout = ({ data, children }) => (
  <div>
    <GlobalStyle />
    <Ribbon>
      <span role="img" aria-label="waving hands">
        👋
      </span>
      &nbsp;Hi, this is a demo!
    </Ribbon>
    <Head />
    <AnimatedContainer>
      <Header>
        <Logo>
          <Link to="/">
            <img src={LogoImg} alt={data.site.siteMetadata.siteTitle} />
          </Link>
        </Logo>
        <TopNav>
          <NavCheck type="checkbox" />
          <NavBtn>
            <span />
            <span />
            <span />
          </NavBtn>
          <ul>
            {data.site.siteMetadata.headerLinks.map(link => (
              <li key={link.name}>
                <Link
                  to={link.link}
                  activeClassName="active"
                  partiallyActive={true}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </TopNav>
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
            headerLinks {
              name
              link
            }
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
