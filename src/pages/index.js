import React from 'react';
import PropTypes from 'prop-types';
import Layout from 'components/layout';
import Box from 'components/box';
import Gallery from 'components/gallery';
import { graphql } from 'gatsby';
import {
  ContentWrapper,
  MainBanner,
  MainTitle,
} from '../components/box/box.css';

const Index = ({ data }) => (
  <Layout>
    <MainBanner>
      <Box>
        <MainTitle
          dangerouslySetInnerHTML={{
            __html: data.homeJson.intro.childMarkdownRemark.html,
          }}
        />
      </Box>
    </MainBanner>
    <Box>
      <Gallery items={data.homeJson.gallery} />
    </Box>
    <Box>
      <ContentWrapper
        dangerouslySetInnerHTML={{
          __html: data.homeJson.content.childMarkdownRemark.html,
        }}
      />
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
      intro {
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
      content {
        childMarkdownRemark {
          html
          rawMarkdownBody
        }
      }
    }
  }
`;
