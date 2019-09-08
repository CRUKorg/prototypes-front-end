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

const Patterns = ({ data }) => (
  <Layout>
    <Head pageTitle={data.patternsJson.title} />
    <Flex>
      <SideNav category="Guidelines" />
      <Main>
        <div
          dangerouslySetInnerHTML={{
            __html: data.patternsJson.content.childMarkdownRemark.html,
          }}
        />
      </Main>
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
