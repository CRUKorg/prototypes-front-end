import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Layout from 'components/layout';
import Box from 'components/box';
import Head from 'components/head';

const Patterns = ({ data }) => (
  <Layout>
    <Head pageTitle={data.patternsJson.title} />
    <Box>
      <div
        dangerouslySetInnerHTML={{
          __html: data.patternsJson.content.childMarkdownRemark.html,
        }}
      />
    </Box>
  </Layout>
);

Patterns.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Patterns;

export const query = graphql`
  query PatternsQuery {
    patternsJson {
      title
      content {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`;
