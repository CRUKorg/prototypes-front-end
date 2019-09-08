import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { COLORS, TYPOGRAPHY } from 'constants/constants';

const SideNav = styled.div`
  width: 100%;
  max-width: 320px;
  color: ${COLORS.white};
  background-color: ${COLORS.primary};
  font-family: ${TYPOGRAPHY.fontFamilyHeadings};
  padding: 32px 16px;
  margin-bottom: -5000px;
  padding-bottom: 5000px;
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
    {!cat && (
      <ul>
        <li>
          <span>{cat}</span>
        </li>
      </ul>
    )}
  </SideNav>
);

Sidebar.propTypes = {
  cat: PropTypes.string,
};

export default Sidebar;
