import React from 'react';
import { SideNav } from './sidebar.css';

const Sidebar = () => (
  <SideNav>
    <ul>
      <li><span>Design token</span></li>
      <li>
        <span>Colors</span>
        <ul>
          <li>
            <span>Primary colors</span>
          </li>
          <li>
            <span>Color palette</span>
            <ul>
              <li>Dark Blue</li>
              <li>Magenta</li>
              <li>Cyan</li>
            </ul>
          </li>
        </ul>
      </li>
      <li>
        <span>Type scale</span>
      </li>
      <li>
        <span>Spacing</span>
      </li>
    </ul>
  </SideNav>
);

export default Sidebar;
