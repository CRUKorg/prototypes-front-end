import React from 'react';
import PropTypes from 'prop-types';
import Layout from 'components/layout';
import Box from 'components/box';
import Gallery from 'components/gallery';
import { graphql } from 'gatsby';
import { MainBanner, MainTitle } from '../components/box/box.css';

const Index = ({ data }) => (
  <Layout>
    <MainBanner>
      <Box>
        <MainTitle>
          {data.homeJson.content.childMarkdownRemark.rawMarkdownBody}
        </MainTitle>
      </Box>
    </MainBanner>
    <Box>
      <Gallery items={data.homeJson.gallery} />
    </Box>
  </Layout>
);

Index.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Index;

export const query = graphql`
  query HomepageQuery {
    homeJson {
      title
      content {
        childMarkdownRemark {
          html
          rawMarkdownBody
        }
      }
      gallery {
        title
        copy
        image {
          childImageSharp {
            fluid(maxHeight: 500, quality: 90) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        toPage
      }
    }
  }
`;
