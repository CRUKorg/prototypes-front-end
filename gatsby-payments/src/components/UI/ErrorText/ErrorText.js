// @Flow

import React from 'react';
import styled, { withTheme } from 'styled-components';
import { COLORS } from '../Constants';

const StyledErrorText = styled.div`
  color: ${props => props.theme.colors.textError};
`;

type ErrorTextProps = {
  theme: { colors: {} },
};

const ErrorText = (props: ErrorTextProps) => {
  const theme = {
    colors: {
      ...COLORS,
      ...props.theme.colors,
    },
  };
  return (
    <StyledErrorText theme={theme} role="alert">
      {props.children}
    </StyledErrorText>
  );
};

ErrorText.defaultProps = ({
  theme: {},
});

export default withTheme(ErrorText);
