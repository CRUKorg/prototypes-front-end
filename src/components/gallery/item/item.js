import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import Img from 'gatsby-image';
import { Copy } from './item.css';

const Item = ({ title, copy, image, toPage }) => (
  <figure>
    <Img fluid={image ? image.childImageSharp.fluid : {}} alt={title} />
    <figcaption>
      <h2>{title}</h2>
      <Copy>{copy}</Copy>
      <Link to={`/${toPage}/`} activeClassName="active" partiallyActive={true}>
        View the guidelines
      </Link>
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
