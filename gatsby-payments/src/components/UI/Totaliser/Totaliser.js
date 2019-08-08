// @Flow

import React from 'react';
import styled, { css, withTheme } from 'styled-components';
import { BREAKPOINT, COLORS, TYPOGRAPHY, UTILITIES } from '../Constants';
import { ProgressBar } from '../index';
import Helper from '../Helper';

type TotaliserProps = {
  giftAid: number,
  isCompact: boolean,
  summary?: Function,
  target?: number | null,
  theme: { target: {}, colors: {}, typography:{} },
  total: number,
};

const DetailWrapper = styled.div`
  color: ${props => props.theme.colors.white};
  text-align: center;
  background-color: ${props => props.theme.colors.tertiary};
  border-radius: 3.2rem;
  padding: 5px;
  position: relative;
  z-index: 10;
  
  p {
    margin: 0;
  }
`;
const ProgressBarWrapper = styled.div`
  padding: 0 46px 12px;
  margin-top: 7px;
  border: solid 1px ${COLORS.grayMedium};
  border-radius: ${UTILITIES.borderRadius};
  width: 100%;
  position: relative;
`;
const Total = styled.p`
  font-size: 2.625rem;
  line-height: 3rem;
`;
const Summary = styled.div`
  text-align: right;
  margin-top: 12px;
  margin-bottom: 0;
`;
const TotaliserWrapper = styled.div`
  font-family: ${props => props.theme.typography.fontFamilyHeadings};
  margin: 0 0 20px 0;
  @media (min-width: ${BREAKPOINT.desktop}) {
    max-width: 335px;
  }
  ${props => props.isCompact && css`
    max-width: 100%;
    position: relative;
    ${ProgressBarWrapper} {
      border: none;
      padding: 0;
    }
    ${Summary} {
      position: absolute;
      top: 0px;
      right: 0;
      margin-top: 0;
    }
  `}
`;
const CompactWrapper = styled.div`
  ${Total} {
    font-size: 1rem;
    line-height: ${UTILITIES.lineHeight};
    background-color: ${props => props.theme.colors.primary};
    border-radius: 20px;
    color: ${props => props.theme.colors.white};
    padding: 5px 12px;
    margin: -5px 0 5px;
    display: inline-block;
  }
`;

const Totaliser = (props: TotaliserProps) => {
  const theme = {
    colors: {
      ...COLORS,
      ...props.theme.colors,
    },
    typography: {
      ...TYPOGRAPHY,
      ...props.theme.typography,
    },
    target: props.theme.target,
  };
  const result = Helper.calculatePercentRounded(+props.total, props.target);
  const StyledProgressBar = styled(ProgressBar)`
    ${!props.isCompact && css`
      > div > div:after {
        content: '\\25bc';
        color: ${theme.colors.tertiary};
        z-index: 11;
        position: absolute;
        top: -39px;
        right: -15px;
        font-size: 32px;
      }
    `}
  `;
  return (
    <TotaliserWrapper theme={theme}>
      {props.isCompact ? (
        <CompactWrapper theme={theme}>
          <Total>£{Helper.formatMoney(props.total)}</Total>
        </CompactWrapper>
      ) : (
        <DetailWrapper theme={theme}>
          <p>Total raised</p>
          <Total>£{Helper.formatMoney(props.total)}</Total>
          <p>+ £{Helper.formatMoney(props.giftAid)} Gift Aid</p>
        </DetailWrapper>
      )}
      {props.target !== null &&
        <ProgressBarWrapper theme={theme}>
          <StyledProgressBar percentage={result} />
          <Summary>{props.summary(Helper.formatMoney(props.target), result)}</Summary>
        </ProgressBarWrapper>
      }
      {props.children}
    </TotaliserWrapper>
  );
};

Totaliser.defaultProps = {
  theme: {},
  target: null,
  summary: (target, percentage) => `${percentage}% of £${target} target`,
};

export default withTheme(Totaliser);
