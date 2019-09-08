import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
`;
const Box = ({ children }) => <Container>{children}</Container>;

Box.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Box;
