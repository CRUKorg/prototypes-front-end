import styled from 'styled-components';
import { TYPOGRAPHY } from '../../../constants/constants';

export const SideNav = styled.div`
  width: 100%;
  max-width: 230px;
  background-color: #f3f4f4;
  font-family: ${TYPOGRAPHY.fontFamilyHeadings};
  padding-top: 24px;
  padding-left: 15px;
  li {
    display: block;
    padding-top: 0;
    padding-bottom: 0;
    padding-left: 10px;
  }
  ul {
    margin: 0;
    padding: 0;
    position: relative;
    list-style: none;
    ul {
      border-left: 5px solid #ccc;
      margin-left: 10px;
    }
  }
`;
