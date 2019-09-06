import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import Layout from 'components/Layout';
import Box from 'components/box';
import Gallery from 'components/gallery';
import AtomFeed from 'components/AtomFeed/AtomFeed';
import Bg from 'images/cell.png';

const RowTop = styled.div`
  display: flex;
  background: url(${Bg}) no-repeat 130% -160px;
  display: block;
  width: 100%;
  height: 100%;
  min-height: 300px;
  background-size: 70%;
  padding: 64px;
  h1 {
    font-size: 64px;
  }
  p {
    max-width: 500px;
    font-size: 21px;
  }
`;

const RowBottom = styled.div`
  background: linear-gradient(to right, #77DAF5 0, #77DAF5 50%, #C3EFFA 50%);
`;

const Cards = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  padding: 0 16px 32px;
`;

const Index = ({ data }) => {
  return (
    <Layout>
      <Box>
        <RowTop>
          <h1>Design system</h1>
          <p>A design system is basically the story of how an organization builds a digital product.</p>
        </RowTop>
      </Box>
      <Box>
        <Gallery items={data.homeJson.gallery} />
      </Box>
      <div style={{ backgroundColor: 'white' }}>
        <Box>
          <div
            dangerouslySetInnerHTML={{
              __html: data.homeJson.content.childMarkdownRemark.html,
            }}
          />
        </Box>
      </div>
      <RowBottom>
        <Box>
          <Cards>
            <AtomFeed data={data.allAtomEntry.edges} />
            <div>placeholder</div>
          </Cards>
        </Box>
      </RowBottom>
    </Layout>
  );
};

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
    allAtomEntry {
      edges {
        node {
          title
          link
        }
      }
    }
  }
`;
