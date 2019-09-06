import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const FeedWrapper = styled.div`
  font-size: 1rem;
  ul {
    list-style-type: none;
    padding-left: 40px;
    margin: 0px 0px 0px 8px;
    border-left: 4px solid rgb(222, 225, 225);
  }
`;
const AtomFeed = ({ data }) => {
  const atom = data.slice(0, 10) || {};
  return (
    <FeedWrapper>
      <h3>Change log</h3>
      <p>
        As a living, breathing brand, these guidelines are never set in stone. We’re constantly adding and adapting,
        so see below for our most recent updates.
      </p>
      <ul>
        {Object.keys(atom).map((item, i) => (
          <li key={i}>
            <a
              target='_blank' rel='noreferrer noopener' href={atom[item].node.link}
            >
              {atom[item].node.title}
            </a>
          </li>
        ))}
      </ul>
    </FeedWrapper>
  )
};

AtomFeed.propTypes = {
  data: PropTypes.any,
};

export default AtomFeed;
