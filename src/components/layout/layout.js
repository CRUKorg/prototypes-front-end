import React from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';
import Head from 'components/head';
import Header from 'components/header';
import GlobalStyle from 'global.css.js';
import { TopBanner, Main, Footer } from './layout.css';

const Layout = ({ data, children }) => (
  <div>
    <GlobalStyle />
    <TopBanner>
      <span role="img" aria-label="waving hands">
        👋
      </span>
      &nbsp;Hi, this is a demo!
    </TopBanner>
    <Head />
    <Header title={data.site.siteMetadata.siteTitle} />
    <Main>
      {children}
    </Main>
    <Footer>
      <a href="https://tinyurl.com/y4hz4fyu">Find Team Starling</a> |&nbsp;
      <a href="mailto:Tech-ProjectStarling@CancerResearchUKO365.onmicrosoft.com">
        Drop us an email
      </a>
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
