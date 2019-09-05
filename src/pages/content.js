import React from 'react';
import PropTypes from 'prop-types';
import { graphql, Link } from 'gatsby';
import styled from 'styled-components';
import Layout from 'components/layout';
import Box from 'components/box';
import Flex from 'components/flex/flex';
import Sidebar from '../components/header/sidebar/sidebar';

const StyledBox = styled.div`
  padding: 20px 2% 0;
`;

const Content = ({ data }) => {
  const listing = data.allContentfulGeneral.edges;
  return (
    <Layout>
      <Flex>
        <Sidebar />
        <Box>
          <StyledBox>
            <h2>
              Prototype: below copy from remote CMS, ask admin for access to view editor example
            </h2>
            <ul>
              {listing.map(({ node: post }) => (
                <li key={post.id}>
                  <Link to={`/content/post/${post.slug}`}>{post.menuTitle || post.title}</Link>
                  {post.childPages && (
                    <ul>
                      {Object.keys(post.childPages).map((key, index) => (
                        <li key={post.childPages[key].id}>
                          <Link to={`/content/post/${post.childPages[key].slug}`}>
                            {post.childPages[key].menuTitle}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </StyledBox>
        </Box>
      </Flex>
    </Layout>
  );
};

Content.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Content;

export const query = graphql`
  query GeneralPageQuery {
    allContentfulGeneral(limit: 30) {
      edges {
        node {
          id
          title
          menuTitle
          slug
          body {
            body
          }
          image {
            file {
              url
            }
          }
          tags
          childPages {
            menuTitle
            slug
            id
          }
        }
      }
    }
  }
`;
