import styled from 'styled-components';
import { COLORS } from '../../constants/constants';

export const Container = styled.div`
  max-width: 1400px;
  margin: 0 auto;
`;

export const MainTitle = styled.h1`
  padding: 2rem;
  max-width: 800px;
  line-height: 1.2;
  blockquote {
    border-left: 7px solid #ccc;
    padding: 0 0 0 15px;
    margin: 0;
  }
`;

export const MainBanner = styled.div`
  background: 
  repeating-linear-gradient(90deg, #f0f0f0 0, #f0f0f0 5%, transparent 0, transparent 50%) 0 / 15px 15px,
  repeating-linear-gradient(180deg, #f0f0f0 0, #f0f0f0 5%, transparent 0, transparent 50%) 0 / 15px 15px;
`;
