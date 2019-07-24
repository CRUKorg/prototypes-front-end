import React from 'react';
import { Link } from 'gatsby';
import { SideNav } from './sidebar.css';

const Sidebar = () => (
  <SideNav>
    <ul>
      <li>
        <Link to="/visual">Design token</Link>
        <ul>
          <li>
            <Link to="/visual">Color</Link>
          </li>
          <li>
            <Link to="/visual">Type scale</Link>
          </li>
          <li>
            <Link to="/visual">Spacing</Link>
          </li>
        </ul>
      </li>
      <li>
        <Link to="/visual">Color</Link>
      </li>
    </ul>
  </SideNav>
);

export default Sidebar;
