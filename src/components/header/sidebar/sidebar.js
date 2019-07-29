import React from 'react';
import PropTypes from 'prop-types';
import { SideNav } from './sidebar.css';
import Header from '../header';

const DesignNav = (
  <ul>
    <li>
      <span>Design token</span>
    </li>
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
      <span>Spacing</span>
    </li>
    <li>
      <span>Type scale</span>
    </li>
  </ul>
);

const Sidebar = ({ cat }) => (
  <SideNav>
    {cat === 'design' ? DesignNav : (<ul><li><span>{cat}</span></li></ul>)}
  </SideNav>
);

Header.propTypes = {
  cat: PropTypes.string,
};

export default Sidebar;
