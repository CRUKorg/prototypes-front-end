/*
 * Style only used to power up the system
 * @TODO: gradually move over to component style, i.e: form, button, grid...etc.
 */
import { css } from 'styled-components';
import { accent } from 'constants/theme';
import { COLORS } from 'constants/constants';
import MEDIA from 'helpers/mediaTemplates';

export const SiteSpecific = css`
  ol,
  ul {
    list-style: none;
  }

  blockquote {
    background: #f9f9f9;
    border-left: 10px solid #ccc;
    margin: 1.5em 10px;
    padding: 0.5em 10px;
    quotes: '\201C''\201D''\2018''\2019';
  }
  blockquote:before {
    color: #ccc;
    content: open-quote;
    font-size: 4em;
    line-height: 0.1em;
    margin-right: 0.25em;
    vertical-align: -0.4em;
  }
  blockquote p {
    display: inline;
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
  }

  video {
    max-width: 100%;
  }

  img {
    width: 100%;
    height: auto;
  }
  b,
  strong {
    font-weight: bold;
  }

  /* Markdown Styles */
  .markdown {
    display: flex;
    justify-content: space-between;

    .layout-30 {
      div:nth-child(1) {
        width: 30%;
      }
      div:nth-child(2) {
        width: 69%;
      }
    }
    .layout-50 {
      div:nth-child(1),
      div:nth-child(2) {
        width: 50%;
      }
    }
    .color-block {
      display: block;
      height: 115px;
      padding-top: 45px;
      color: white;
      text-align: center;
    }
    .color-palette-block {
      width: 20%;
      padding-top: 15%;
      text-align: center;
    }
    .color-palettes {
      width: 80%;
      position: relative;

      label,
      input {
        height: 60px;
      }
      label {
        width: 50%;
        display: block;
        text-align: center;
        padding-top: 20px;
        cursor: pointer;
        transition: all 0.15s 0s;
      }
      input {
        position: absolute;
        opacity: 0;
        width: 50%;
        cursor: pointer;
      }
      .color-content {
        position: absolute;
        top: 0;
        left: 50%;
        width: 50%;
        min-width: 400px;
        background-color: #f3f4f4;
        display: none;
        height: 100%;
        padding: 0 20px;

        p span {
          display: block;
          &:nth-child(2) {
            background-color: white;
            border-radius: 4px;
            padding: 5px 10px;
          }
        }
      }
      input:checked ~ div {
        display: block;
      }
      input:checked ~ label {
        text-decoration: underline;
      }
      input:checked ~ label .white {
        text-decoration: underline;
        color: white;
      }
      input:hover ~ label {
        transform: scale(1.03);
      }
    }
  }
  .flex-column {
    display: flex;
    flex-direction: column;
  }
  .flex {
    display: flex;
    justify-content: space-between;
  }
  .flex-full {
    width: 100%;
  }
  .white {
    color: white;
  }
  .space {
    display: block;
    background-color: #f7a0b1;
    margin: 0 20px;
    height: 100px;
  }
  .type-scale {
    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      color: ${COLORS.primary};
    }
  }
  .type-scale-row {
    display: flex;
    justify-content: flex-start;
    border-bottom: 1px solid ${COLORS.grayDark};
    width: 95%;
  }
  .type-scale-text {
    margin-right: 20px;
    font-size: 12px;
    color: ${COLORS.grayDark};
    display: block;
    width: 90px;
  }
  .badges {
    display: flex;
    flex-wrap: wrap;
    margin: 0;
    position: absolute;
    right: 15px;
    top: 5px;
    span,
    span:nth-child(2) {
      color: #fff;
      background-color: #1a5f02;
      flex-basis: 28px;
      text-align: center;
      height: 28px;
      width: 28px;
      border-radius: 100%;
      text-transform: uppercase;
      line-height: 10px;
      font-size: 10px;
      font-weight: bold;
      padding-top: 10px;
      margin-right: 2px;
      margin-top: 2px;
    }
    span.red {
      background-color: #a81616;
    }
  }
  .mobile-only {
    display: block;
  }
  .desktop-only {
    display: none;
  }
  ${MEDIA.MIN_DESKTOP`
    .mobile-only {
      display: none;
    }
    .desktop-only {
      display: block;
    }
  `};
`;
