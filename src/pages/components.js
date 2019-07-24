import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Layout from 'components/layout';
import Box from 'components/box';
import Head from 'components/head';

const Components = ({ data }) => (
  <Layout>
    <Head pageTitle={data.componentsJson.title} />
    <Box>
      <div
        dangerouslySetInnerHTML={{
          __html: data.componentsJson.content.childMarkdownRemark.html,
        }}
      />
    </Box>
  </Layout>
);

Components.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Components;

export const query = graphql`
  query ComponentsQuery {
    componentsJson {
      title
      content {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`;
