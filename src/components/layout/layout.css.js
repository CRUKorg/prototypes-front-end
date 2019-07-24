import styled from 'styled-components';
import { COLORS } from '../../constants/constants';

export const TopBanner = styled.div`
  width: 100%;
  position: fixed;
  top: 0;
  display: block;
  padding: 10px 0;
  background-color: hsla(324, 100%, 46%, 0.7);
  color: white;
  font-weight: bold;
  text-align: center;
  z-index: 1000;
`;

export const Footer = styled.div`
  width: 100%;
  display: block;
  color: #333333;
  text-align: center;
  background: rgb(243, 244, 244);
  padding: 15px;
  height: 50px;
  a {
    color: ${COLORS.grayDark};
    text-decoration: none;
  }
`;

export const Main = styled.div`
  display: block;
  width: 100%;
  height: 100%;
  padding: 0;
  min-height: calc(100vh - 50px);
`;
