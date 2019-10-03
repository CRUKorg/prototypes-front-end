import React from "react"
import PropTypes from "prop-types"
import styled from 'styled-components';

import Header from "./UI/Header";
import Footer from "./UI/Footer";
import Box from "./UI/Box/Box";
import GlobalStyle from './UI/GlobalStyle';

const StyledBox = styled(Box)`
  max-width: 470px;
  margin: 20px auto;
`;

const StyledMain = styled.main`
  flex: 1 0 auto;
`

const Layout = ({ children }) => {

  return (
    <>
      <GlobalStyle />
      <Header />
      <StyledMain>
        <StyledBox>
          {children}
        </StyledBox>
      </StyledMain>
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
