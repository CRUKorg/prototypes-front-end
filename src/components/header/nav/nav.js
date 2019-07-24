import React from 'react';
import { Link } from 'gatsby';
import { Container } from './nav.css';

const Nav = () => (
  <Container>
    <ul>
      <li>
        <Link to="/content/" activeClassName="active" partiallyActive={true}>
          Content
        </Link>
      </li>
      <li>
        <Link to="/design">Design</Link>
      </li>
      <li>
        <Link to="/components">Components</Link>
      </li>
      <li>
        <Link to="/patterns">Patterns & guides</Link>
      </li>
      <li>
        <a
          href="https://github.com/CRUKorg/prototypes-front-end/tree/starling"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
      </li>
    </ul>
  </Container>
);

export default Nav;
