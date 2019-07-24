import { createGlobalStyle } from 'styled-components';
import { accent } from 'constants/theme';
import { COLORS, TYPOGRAPHY, UTILITIES } from 'constants/constants';
import MEDIA from 'helpers/mediaTemplates';

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
  html, body, div, span, applet, object, iframe, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
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
  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure,
  footer, header, hgroup, menu, nav, section {
    display: block;
  }
  html, body {
    height: 100%;
    margin: 0;
  }
  html {
    font-size: ${TYPOGRAPHY.fontSizeBase};
    font-family: ${TYPOGRAPHY.fontFamilyBase};
    line-height: ${UTILITIES.lineHeight};
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
  }
  *, *:after, *:before {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
  }
  h1, h2, h3, h4, h5, h6 {
    font-family: ${TYPOGRAPHY.fontFamilyHeadings};
    font-weight: ${TYPOGRAPHY.fontWeightMedium};
    color: ${COLORS.grayDarker};
    line-height: ${UTILITIES.lineHeight};
    margin-top: 0;
    margin-bottom: ${UTILITIES.rhythmVerticalBase};
    max-width: 100%;
  }
  h1 { font-size: 1.4375rem; }
  h2 { font-size: 1.1875rem; }
  h3 { font-size: 1rem; }
  h4 { font-size: 0.875rem;  }
  h5 { font-size: 0.875rem;  }
  h6 { font-size: 0.75rem;   }
  ${MEDIA.MIN_DESKTOP`
    h1 { font-size: 2rem; } 
    h2 { font-size: 1.4375rem; } 
    h3 { font-size: 1.1875rem; } 
    h4 { font-size: 1rem; } 
    h5 { font-size: 1rem; } 
    h6 { font-size: 0.875rem; } 
  `};
  ol, ul {
    list-style: none;
  }

  blockquote, q {
    quotes: none;
  }

  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }

  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  pre {
    display: block;
    padding: 2rem;
    margin-top: 4rem;
    overflow: auto;
    font-size: 85%;
    line-height: 1.45;
    border-radius: 5px;
    color: ${accent};
    border: 1px solid #ddd;
    font-family: "SFMono-Regular",Consolas,"Liberation Mono",Menlo,Courier,monospace;
  }

  video {
    max-width: 100%;
  }

  p {
    line-height: ${UTILITIES.lineHeight};
  }
  
  a {
    color: ${COLORS.primary};
    &:hover {
      color: ${COLORS.secondary};
    }
  }
  
  img {
    width: 100%;
    height: auto;
  }
`;
