import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import { BLOCKS } from '@contentful/rich-text-types';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import styled from 'styled-components';
import Flex from 'components/Flex';
import ImageWrapper from 'components/ImageWrapper';
import Layout from 'components/Layout';
import SideNav from 'components/SideNav';

const Main = styled.div`
  padding: 32px 2%;
`;
const SectionTitle = styled.div`
  text-transform: capitalize;
  font-weight: bold;
`;
const Post = ({ data }) => {
  const {
    title,
    childContentfulGeneralBodyRichTextNode,
    category,
  } = data.contentfulGeneral;

  const options = {
    renderNode: {
      [BLOCKS.EMBEDDED_ASSET]: node => {
        return <ImageWrapper src={node.data.target.fields.file['en-US'].url} />;
      },
      [BLOCKS.EMBEDDED_ENTRY]: node => {
        return (
          <div
            dangerouslySetInnerHTML={{
              __html: node.data.target.fields.main['en-US'],
            }}
          />
        );
      },
    },
  };
  return (
    <Layout>
      <Flex>
        <SideNav category={category} />
        <Main>
          <SectionTitle>{category}</SectionTitle>
          <h1>{title}</h1>
          <div>
            {childContentfulGeneralBodyRichTextNode &&
              documentToReactComponents(
                childContentfulGeneralBodyRichTextNode.json,
                options
              )}
          </div>
        </Main>
      </Flex>
    </Layout>
  );
};

Post.propTypes = {
  data: PropTypes.object.isRequired,
  children: PropTypes.object,
};

export default Post;

export const pageQuery = graphql`
  query($slug: String!) {
    contentfulGeneral(slug: { eq: $slug }) {
      category
      title
      slug
      body {
        body
      }
      childContentfulGeneralBodyRichTextNode {
        json
      }
      image {
        file {
          url
        }
      }
    }
  }
`;
