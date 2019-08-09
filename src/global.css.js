import { createGlobalStyle } from 'styled-components';
import { COLORS, TYPOGRAPHY, UTILITIES } from 'constants/constants';
import MEDIA from 'helpers/mediaTemplates';
import { SiteSpecific } from './site-specific.css';

export default createGlobalStyle`
  @font-face {
    font-family: "MuseoSans-500";
    src: url("${TYPOGRAPHY.fontsDirectory}.eot");
    src:
    url("${TYPOGRAPHY.fontsDirectory}.eot?#iefix") format('embedded-opentype'),
    url("${TYPOGRAPHY.fontsDirectory}.woff") format('woff'),
    url("${TYPOGRAPHY.fontsDirectory}.woff2") format('woff2'),
    url("${TYPOGRAPHY.fontsDirectory}.ttf") format('truetype'),
    url("${TYPOGRAPHY.fontsDirectory}/.svg##{$font-family}") format('svg');
    font-weight: normal;
    font-style: normal;
  }
  html, body, div, span, applet, object, iframe, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed,
  figure, figcaption, footer, header, hgroup,
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }
  article, aside, details, figcaption, figure,
  footer, header, hgroup, menu, nav, section {
    display: block;
  }
  html, body {
    height: 100%;
    margin: 0;
  }
  body {
    background-color: ${COLORS.white};
    color: ${COLORS.grayDarker};
    margin: 0;
    padding: 0;
    overflow-x: hidden;
    -webkit-text-size-adjust: 100%;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-rendering: optimizeLegibility;
    -webkit-font-feature-settings: "pnum";
    font-feature-settings: "pnum";
    font-variant-numeric: proportional-nums;
    font-family: ${TYPOGRAPHY.fontFamilyBase};
    font-size: calc(12px + .35vw); 
    line-height: calc(12px + 1.05vw);
  }
  *, *:after, *:before {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
  }
  /* 
  Modular scale located at: https://www.modularscale.com/?1,1140,12&em&1.3
  PX to EM: https://all-markup-news.com/px-to-em/
  */
  h1, h2, h3, h4, h5, h6 {
    font-family: ${TYPOGRAPHY.fontFamilyHeadings};
    font-weight: ${TYPOGRAPHY.fontWeightMedium};
    max-width: 100%;
    margin: calc(12px + 1.05vw) 0;
  }
  h4, h5, h6 {
    line-height: calc(18px + .2vw);
  }
  h1 { font-size: 1.912em; line-height: calc(18px + 1.8vw); }
  h2 { font-size: 1.616em; line-height: calc(18px + 1vw); }
  h3 { font-size: 1.471em; line-height: calc(18px + .7vw); }
  h4 { font-size: 1.3em; }
  h5 { font-size: 1.243em; }
  h6 { font-size: 1.132em; }
  ${MEDIA.MIN_DESKTOP`
    h1 { font-size: 1.616em; }
    h2 { font-size: 1.471em; }
    h3 { font-size: 1.3em; }
    h4 { font-size: 1.243em; }
    h5, h6 { font-size: 1.132em; }
  `};
  
  p {
    line-height: ${UTILITIES.lineHeight};
  }
  
  a {
    color: ${COLORS.primary};
    &:hover {
      color: ${COLORS.secondary};
    }
  }
  
  ${SiteSpecific};
`;
