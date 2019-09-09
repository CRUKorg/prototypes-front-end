import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import Flex from 'components/Flex';
import Head from 'components/Head';
import Layout from 'components/Layout';
import SideNav from 'components/SideNav';

const Main = styled.div`
  padding: 32px 2%;
`;

const Design = ({ data }) => (
  <Layout>
    <Head pageTitle={data.designJson.title} />
    <Flex>
      <SideNav category="Visual" />
      <Main>
        <div
          dangerouslySetInnerHTML={{
            __html: data.designJson.content.childMarkdownRemark.html,
          }}
        />
      </Main>
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
