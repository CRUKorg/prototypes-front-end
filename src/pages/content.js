import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import Layout from 'components/layout';
import Box from 'components/box';
import Flex from 'components/flex/flex';
import Head from 'components/head';
import Sidebar from 'components/header/sidebar/sidebar';

const StyledBox = styled.div`
  padding: 20px 2% 0;
`;

const Content = ({ data }) => (
  <Layout>
    <Head pageTitle={data.contentJson.title} />
    <Flex>
      <Sidebar />
      <Box>
        <StyledBox>
          <div
            dangerouslySetInnerHTML={{
              __html: data.contentJson.content.childMarkdownRemark.html,
            }}
          />
        </StyledBox>
      </Box>
    </Flex>
  </Layout>
);

Content.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Content;

export const query = graphql`
  query ContentQuery {
    contentJson {
      title
      content {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`;
