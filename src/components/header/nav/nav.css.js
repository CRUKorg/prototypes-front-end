import styled from 'styled-components';

export const Container = styled.nav`
  ul {
    display: flex;
    list-style: none;
    padding: 0;
    li {
      text-transform: uppercase;
      & + li {
        margin-left: 2rem;
      }
    }
    a {
      border-bottom: 4px solid transparent;
      padding-bottom: 10px;
      &:hover {
        border-bottom: 4px solid #ec008c;
      }
      &.active {
        border-bottom: 4px solid #ec008c;
        &:hover {
          border-bottom: 4px solid #2e008b;
        }
      }
    }
  }
`;
