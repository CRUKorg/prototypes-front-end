import React from 'react';
import PropTypes from 'prop-types';
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live';
import { MDXProvider } from '@mdx-js/react';
import styled from 'styled-components';
import Layout from 'components/Layout';
import Box from 'lib/BoxExample';
import Flex from 'components/Flex';
import Head from 'components/Head';
import SideNav from 'components/SideNav';
import Live from '../../content/components/live.mdx';

const Main = styled.div`
  padding: 32px 2%;
`;
const StyledLiveEditor = styled(LiveEditor)`
  background-color: rgb(54, 65, 65);
  caret-color: rgb(176, 182, 183);
  font-family: 'monospace';
  margin-bottom: 16px;
  border-top: 1px solid rgb(54, 65, 65);
  overflow: auto;
  max-height: none;
  line-height: 1.5;
  font-size: 1rem;
  &:before {
    content: '1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 28 29 30 31 32 33 34 35 36 37 38 39 40 41 42 43 44 45 46 47 48 49 50 51 52 53 54 55 56 57 58 59 60 61 62 63 64 65 66 67 68 69 70 71 72 73 74 75 76 77 78 79 80 81 82 83 84 85 86 87 88 89 90 91 92 93 94 95 96 97 98 99 100 101 102 103 104 105 106 107 108 109 110 111 112 113 114 115 116 117 118 119 120 121 122 123 124 125 126 127 128 129 130 131 132 133 134 135 136 137 138 139 140 141 142 143 144 145 146 147 148 149 150 151 152 153 154 155 156 157 158 159 160 161 162 163 164 165 166 167 168 169 170 171 172 173 174 175 176 177 178 179 180 181 182 183 184 185 186 187 188 189 190 191 192 193 194 195 196 197 198 199 199 200';
    width: 10px;
    position: absolute;
    top: 16px;
    left: 8px;
    bottom: 16px;
    color: rgb(81, 94, 95);
    white-space: pre-line;
    text-align: right;
    overflow: hidden;
  }
  textarea,
  pre {
    caret-color: rgb(110, 121, 122);
    font-feature-settings: normal;
    overflow-wrap: normal !important;
    white-space: pre !important;
    padding: 16px 16px 16px 32px !important;
  }
`;

const StyledPre = styled.div`
  max-width: 60%;
`;
const StyledLivePreview = styled(LivePreview)`
  overflow-wrap: break-word;
  color: inherit;
  background-color: rgb(255, 255, 255);
  padding: 40px;
  border-color: rgb(222, 225, 225) rgb(222, 225, 225);
  border-width: 1px 1px;
  border-style: solid solid none;
  border-bottom: none;
  border-top: 1px solid rgb(222, 225, 225);
  overflow: hidden;
  border-radius: 4px 4px 0px 0px;
`;

const Components = ({ children }) => {
  return (
    <Layout>
      <Head pageTitle="Components" />
      <Flex>
        <SideNav category="Components" />
        <MDXProvider
          components={{
            wrapper: ({ children }) => {
              return <>{children}</>;
            },
            pre: props => <StyledPre {...props} />,
            code: ({ children }) => (
              <LiveProvider code={children.trim()} scope={{ Box }}>
                <StyledLivePreview />
                <StyledLiveEditor />
                <LiveError />
              </LiveProvider>
            ),
          }}
        >
          <Main>
            {children}
            <Live />
          </Main>
        </MDXProvider>
      </Flex>
    </Layout>
  );
};

Components.propTypes = {
  children: PropTypes.node,
};

export default Components;
