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

const Components = ({ data }) => (
  <Layout>
    <Head pageTitle={data.componentsJson.title} />
    <Flex>
      <Sidebar />
      <Box>
        <StyledBox>
          <div
            dangerouslySetInnerHTML={{
              __html: data.componentsJson.content.childMarkdownRemark.html,
            }}
          />
        </StyledBox>
      </Box>
    </Flex>
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
