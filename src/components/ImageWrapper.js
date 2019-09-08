import React from 'react';
import PropTypes from 'prop-types';

const ImageWrapper = ({ src, srcSet }) => (
  <img alt="" src={src} srcSet={srcSet} />
);

ImageWrapper.propTypes = {
  src: PropTypes.string,
  srcSet: PropTypes.string,
};

export default ImageWrapper;
