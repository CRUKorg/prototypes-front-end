import React from 'react';
import PropTypes from 'prop-types';
import { Container } from './flex.css';

const Flex = ({ children }) => <Container>{children}</Container>;

Flex.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Flex;
