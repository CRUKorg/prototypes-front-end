import React from 'react';
import Transition from 'components/Transition';
import PropTypes from 'prop-types';

const wrapPageElement = ({ element, props }) => {
  return <Transition {...props}>{element}</Transition>;
};

wrapPageElement.propTypes = {
  element: PropTypes.any,
  props: PropTypes.any,
};

export default wrapPageElement;
