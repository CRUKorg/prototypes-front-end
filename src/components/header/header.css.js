import styled from 'styled-components';
import { COLORS, TYPOGRAPHY } from '../../constants/constants';

export const Container = styled.header`
  font-family: ${TYPOGRAPHY.fontFamilyHeadings};
  text-transform: uppercase;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 4rem 2rem 1rem;

  a {
    color: ${COLORS.primary};
    transition: color 0.2s ease;
    text-decoration: none;

    &:hover {
      color: ${COLORS.secondary};
    }
  }
`;
