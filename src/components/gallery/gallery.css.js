import styled from 'styled-components';
import MEDIA from 'helpers/mediaTemplates';

export const Container = styled.div`
  display: block;
  grid-gap: 2rem;
  padding: 0 2rem;
  margin: 2rem 0;
  h2 {
    margin-top: 10px;
  }
  figure {
    margin-bottom: 2rem;
  }
  ${MEDIA.MIN_TABLET`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  `};
  ${MEDIA.MIN_DESKTOP`
    grid-template-columns: repeat(4, 1fr);
  `};
`;
