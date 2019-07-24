import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Layout from 'components/layout';
import Box from 'components/box';
import Head from 'components/head';

const Design = ({ data }) => (
  <Layout>
    <Head pageTitle={data.designJson.title} />
    <Box>
      <div
        dangerouslySetInnerHTML={{
          __html: data.designJson.content.childMarkdownRemark.html,
        }}
      />
    </Box>
  </Layout>
);

Design.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Design;

export const query = graphql`
  query DesignQuery {
    designJson {
      title
      content {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`;
