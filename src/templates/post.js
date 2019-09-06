import React from 'react';
import PropTypes from 'prop-types';
import { Link, graphql } from 'gatsby';
import { BLOCKS } from '@contentful/rich-text-types';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import styled from 'styled-components';
import Box from 'components/box';
import Flex from 'components/flex/flex';
import Layout from 'components/Layout';
import ImageWrapper from 'components/ImageWrapper';
import Sidebar from 'components/sidebar';

const StyledBox = styled.div`
  padding: 20px 2% 0;
`;
const Tags = styled.div`
  span {
    background-color: #f3f4f4;
    border-radius: 4px;
    padding: 5px 10px;
    display: inline-block;
    margin: 8px;
  }
`;
const Post = ({ data }) => {
  const {
    title, childContentfulGeneralBodyRichTextNode, image, tags
  } = data.contentfulGeneral;

  const options = {
    renderNode: {
      [BLOCKS.EMBEDDED_ASSET]: node => {
        return <ImageWrapper src={node.data.target.fields.file['en-US'].url} />;
      },
    },
  };
  return (
    <Layout>
      <Flex>
        <Sidebar />
        <Box>
          <StyledBox>
            <h1>{title}</h1>
            {image && image.file.url ? (
              <div>
                <img alt={title} src={image.file.url} />
              </div>
            ) : '' }
            <div>
              {documentToReactComponents(
                childContentfulGeneralBodyRichTextNode.json,
                options
              )}
            </div>
            <Tags>
              {tags.map(tag => (
                <span key={tag}>{tag}</span>
              ))}
            </Tags>
            <p>
              <Link to="/content">Back to listing</Link>
            </p>
          </StyledBox>
        </Box>
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
      tags
    }
  }
`;
