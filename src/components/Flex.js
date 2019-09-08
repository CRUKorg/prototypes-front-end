import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
`;

const Flex = ({ children }) => <Container>{children}</Container>;

Flex.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Flex;
