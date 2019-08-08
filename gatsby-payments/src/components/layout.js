/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components";

import Header from "./UI/Header";
import Box from "./UI/Box/Box";
import Button from "./UI/Button/Button";
import GlobalStyle from './UI/GlobalStyle';

const StyledBox = styled(Box)`
  max-width: 600px;
  margin: 20px auto;
`;

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>  
      <GlobalStyle />
      <Header>
        <Button>Login</Button>
      </Header>
      <StyledBox>
        <main>{children}</main>
        <footer>
        </footer>
      </StyledBox>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
