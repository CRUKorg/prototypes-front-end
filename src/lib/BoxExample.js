import React from 'react';
import PropTypes from 'prop-types';
import styled, { css, ThemeProvider, withTheme } from 'styled-components';

const Box = ({ children, bgColor, borderColor }) => {
  const BoxWrapper = styled.div`
    width: 100%;
    padding: 16px;
    ${bgColor &&
      css`
        background-color: ${bgColor};
      `}
    ${borderColor &&
      css`
        border: 1px solid ${borderColor};
      `}
  `;
  const theme = {};
  return (
    <ThemeProvider theme={theme}>
      <BoxWrapper>
        {children}
      </BoxWrapper>
    </ThemeProvider>
  );
};

Box.propTypes = {
  children: PropTypes.node,
  theme: PropTypes.object,
  bgColor: PropTypes.string,
  borderColor: PropTypes.string,
};

Box.defaultProps = {
  theme: {},
};

export default withTheme(Box);
