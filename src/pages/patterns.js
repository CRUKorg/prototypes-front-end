import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import Layout from 'components/Layout';
import Box from 'components/box';
import Flex from 'components/flex/flex';
import Head from 'components/Head';
import Sidebar from 'components/sidebar';

const StyledBox = styled.div`
  padding: 20px 2% 0;
`;

const Patterns = ({ data }) => (
  <Layout>
    <Head pageTitle={data.patternsJson.title} />
    <Flex>
      <Sidebar cat="patterns" />
      <Box>
        <StyledBox>
          <div
            dangerouslySetInnerHTML={{
              __html: data.patternsJson.content.childMarkdownRemark.html,
            }}
          />
        </StyledBox>
      </Box>
    </Flex>
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
