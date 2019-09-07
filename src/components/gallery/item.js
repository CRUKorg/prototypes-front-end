import React from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';

const Item = ({ title, copy, image }) => (
  <figure>
    <Img fluid={image ? image.childImageSharp.fluid : {}} alt={title} />
    <figcaption>
      <h3>{title}</h3>
      <p>{copy}</p>
    </figcaption>
  </figure>
);

Item.propTypes = {
  title: PropTypes.string,
  copy: PropTypes.string,
  image: PropTypes.object.isRequired,
  toPage: PropTypes.string,
};

export default Item;
