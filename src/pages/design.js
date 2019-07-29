import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import Layout from 'components/layout';
import Box from 'components/box';
import Flex from 'components/flex';
import Head from 'components/head';
import Sidebar from 'components/header/sidebar/sidebar';

const StyledBox = styled.div`
  padding: 20px 2% 0;
`;
const Design = ({ data }) => (
  <Layout>
    <Head pageTitle={data.designJson.title} />
    <Flex>
      <Sidebar />
      <Box>
        <StyledBox>
          <div
            dangerouslySetInnerHTML={{
              __html: data.designJson.content.childMarkdownRemark.html,
            }}
          />
        </StyledBox>
      </Box>
    </Flex>
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
