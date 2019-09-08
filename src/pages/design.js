import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import Flex from 'components/Flex';
import Head from 'components/Head';
import Layout from 'components/Layout';
import Sidebar from 'components/Sidebar';

const StyledBox = styled.div`
  padding: 20px 2% 0;
`;

const Design = ({ data }) => (
  <Layout>
    <Head pageTitle={data.designJson.title} />
    <Flex>
      <Sidebar cat="design" />
      <StyledBox>
        <div
          dangerouslySetInnerHTML={{
            __html: data.designJson.content.childMarkdownRemark.html,
          }}
        />
      </StyledBox>
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
