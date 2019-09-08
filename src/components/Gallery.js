import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Item from './item';
import MEDIA from 'helpers/mediaTemplates';
import { COLORS, UTILITIES } from 'constants/constants';

const Container = styled.div`
  position: relative;
  z-index: 1;
  margin-top: -64px;
  display: block;
  grid-gap: 2rem;
  padding: 0 32px 32px;
  border: 1px solid ${COLORS.grayLight};
  border-bottom-width: 5px;
  border-radius: ${UTILITIES.borderRadius};
  background-color: ${COLORS.white};
  h3 {
    margin: -40px 0 0;
    text-align: center;
  }
  ${MEDIA.MIN_TABLET`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  `};
  ${MEDIA.MIN_DESKTOP`
    grid-template-columns: repeat(4, 1fr);
  `};
`;

const Gallery = ({ items }) => (
  <Container>
    {items.map((item, i) => (
      <Item {...item} key={i} />
    ))}
  </Container>
);

Gallery.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Gallery;
