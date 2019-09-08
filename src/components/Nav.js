import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

const Container = styled.nav`
  width: 100%;
  ul {
    display: flex;
    align-item: stretch;
    list-style: none;
    padding: 0;
    margin: 0;
    height: 80px;
    li {
      text-transform: capitalize;
      & + li {
        margin-left: 32px;
      }
    }
    a {
      height: 100%;
      display: flex;
      align-items: center;
      border-bottom: 4px solid transparent;
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

const Nav = () => (
  <Container>
    <ul>
      <li>
        <Link
          to="/definitions-and-capitalization"
          activeClassName="active"
          partiallyActive={true}
        >
          Writing
        </Link>
      </li>
      <li>
        <Link to="/design" activeClassName="active" partiallyActive={true}>
          Visual
        </Link>
      </li>
      <li>
        <Link to="/components" activeClassName="active" partiallyActive={true}>
          Components
        </Link>
      </li>
      <li>
        <Link to="/patterns" activeClassName="active" partiallyActive={true}>
          Guidelines
        </Link>
      </li>
    </ul>
  </Container>
);

export default Nav;
