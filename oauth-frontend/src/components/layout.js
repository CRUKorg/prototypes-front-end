import React from "react"
import PropTypes from "prop-types"
import styled from 'styled-components';

import Header from "./UI/Header";
import Box from "./UI/Box/Box";
import GlobalStyle from './UI/GlobalStyle';

const StyledBox = styled(Box)`
  max-width: 470px;
  margin: 20px auto;
`;

const Layout = ({ children }) => {

  return (
    <>
      <GlobalStyle />
      <Header />
      <StyledBox>
        <main>{children}</main>
      </StyledBox>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
