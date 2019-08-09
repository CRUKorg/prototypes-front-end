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
      <span>Typography</span>
      <ul>
        <li>
          <span>Responsive Type Scale</span>
        </li>
      </ul>
    </li>
  </ul>
);

const PatternNav = (
  <ul>
    <li>
      <span>Patterns & Guides</span>
    </li>
    <li>
      <span>Accessibility</span>
      <ul>
        <li>
          <span>Accessibility compliance goals</span>
        </li>
        <li>
          <span>Best practices</span>
        </li>
        <li>
          <span>Accessible by design</span>
        </li>
        <li>
          <span>Keyboard navigation</span>
        </li>
        <li>
          <span>Expected Keyboard Navigation Interactions</span>
        </li>
        <li>
          <span>Resources</span>
        </li>
      </ul>
    </li>
  </ul>
);
const Sidebar = ({ cat }) => (
  <SideNav>
    {cat === 'design' && DesignNav}
    {cat === 'patterns' && PatternNav}
    {!cat && (<ul><li><span>{cat}</span></li></ul>)}
  </SideNav>
);

Header.propTypes = {
  cat: PropTypes.string,
};

export default Sidebar;
