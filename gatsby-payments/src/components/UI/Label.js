// @Flow

import React from 'react';
import styled from 'styled-components';

const Label = styled.label`
  display: block;
  font-weight: bold;
  margin-bottom: 10px;
  width: 100%;
  &:first-child {
    margin-top: 5px;
  }
`;

export const WithLabel = ({ children, label }) => (
  label
    ? (
      <Label>
        {label}
        {children}
      </Label>)
    : <React.Fragment>{children}</React.Fragment>
);

export default Label;
