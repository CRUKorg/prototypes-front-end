import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Layout from 'components/layout';
import Box from 'components/box';
import Head from 'components/head';

const Content = ({ data }) => (
  <Layout>
    <Head pageTitle={data.contentJson.title} />
    <Box>
      <div
        dangerouslySetInnerHTML={{
          __html: data.contentJson.content.childMarkdownRemark.html,
        }}
      />
    </Box>
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
