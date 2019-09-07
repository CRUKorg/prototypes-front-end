import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import Layout from 'components/Layout';
import Box from 'components/box';
import Gallery from 'components/gallery';
import AtomFeed from 'components/AtomFeed/AtomFeed';
import { COLORS } from 'constants/constants';
import Item from 'components/gallery/item';
import MEDIA from 'helpers/mediaTemplates';

const Promo = styled.div`
  width: 100%;
  min-height: 350px;
  padding: 64px;
  position: relative;
  background-color: ${COLORS.primary};
  color: white;
  overflow: hidden;
  h1,
  p {
    position: relative;
    z-index: 2;
    max-width: 500px;
  }
  ${MEDIA.MIN_TABLET`
    h1, p {
      left: 20%;
    }
    h1 {
      font-size: 48px;
    }
    p {
      max-width: 500px;
      font-size: 21px;
    }
  `};
  span {
    display: block;
    border-radius: 50%;
    position: absolute;
    z-index: 2;
  }
  span:nth-child(1),
  span:nth-child(4) {
    width: 50px;
    height: 50px;
    background-color: ${COLORS.secondary};
  }
  span:nth-child(2),
  span:nth-child(5) {
    width: 30px;
    height: 30px;
    background-color: ${COLORS.tertiary};
  }
  span:nth-child(3),
  span:nth-child(6) {
    width: 10px;
    height: 10px;
    background-color: ${COLORS.grayLight};
  }
  span:nth-child(1) {
    top: 15%;
    left: 11%;
  }
  span:nth-child(2) {
    top: 55%;
    left: 15%;
  }
  span:nth-child(3) {
    top: 70%;
    left: 14%;
  }
  span:nth-child(4) {
    top: 50%;
    left: 90%;
  }
  span:nth-child(5) {
    top: 65%;
    right: 14%;
  }
  span:nth-child(6) {
    top: 50%;
    right: 27%;
  }
`;

const Cards = styled.div`
  padding: 16px 0 32px;
  max-width: 65%;
  margin: 0 auto;
  h2 {
    text-align: center;
  }
  ${MEDIA.MIN_TABLET`
    > div {
      display: grid;
      grid-gap: 2rem;
      grid-template-columns: repeat(2, 1fr);
    }
  `};
  > div {
    position: relative;
  }
`;

const Card = styled.div`
  figure {
    position: relative;
    div,
    img {
      height: 35px !important;
      width: 60px !important;
      position: absolute !important;
      left: -5px !important;
    }
  }
  figcaption {
    h3 {
      padding-left: 50px;
      margin: 0;
      line-height: 35px;
    }
  }
`;

const Square = styled.div`
  position: absolute;
  top: -110%;
  left: 60%;
  width: 500px;
  height: 500px;
  background: linear-gradient(to right, #2336b6, rgba(31, 38, 103, 0.9));
  transform: rotate(-45deg);
  transition: all 250ms ease-out;
`;

const Circle1 = styled.div`
  position: absolute;
  left: 70%;
  top: 40%;
  width: 350px;
  height: 350px;
  border-radius: 175px;
  background: linear-gradient(to right, rgba(49, 207, 171, 0.5), #50e3c2);
  mix-blend-mode: multiply;
  transition: all 250ms ease-out;
  transition-delay: 50ms;
`;

const Circle2 = styled.div`
  position: absolute;
  left: -10%;
  top: 10%;
  width: 400px;
  height: 400px;
  border-radius: 50%;
  background: linear-gradient(to right, #ec008c 80%, #f796d0);
  mix-blend-mode: multiply;
  transition: all 250ms ease-out;
  transition-delay: 50ms;
`;

const Log = styled.div`
  padding: 16px 0 32px;
  background-color: ${COLORS.white};
  h2 {
    text-align: center;
  }
  div {
    width: 90%;
    max-width: 500px;
    margin: 0 auto;
  }
`;

const Strip = styled.div`
  background: linear-gradient(to right, ${COLORS.primary}, #c3effa 95%);
  display: block;
  height: 50px;
`;

const Index = ({ data }) => {
  return (
    <Layout>
      <Promo>
        <Box>
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
          <Square />
          <Circle1 />
          <Circle2 />
          <div>
            <h1>{data.homeJson.promo.title}</h1>
            <p>{data.homeJson.promo.copy}</p>
          </div>
        </Box>
      </Promo>
      <div>
        <Box>
          <Gallery items={data.homeJson.gallery} />
        </Box>
      </div>
      <Cards>
        <h2>{data.homeJson.card.title}</h2>
        <Box>
          {data.homeJson.card.copy.map((item, i) => (
            <Card key={i}>
              <Item {...item} key={i} />
            </Card>
          ))}
        </Box>
      </Cards>
      <Log>
        <Box>
          <h2>{data.homeJson.log.title}</h2>
          <p>{data.homeJson.log.copy}</p>
          <AtomFeed data={data.allAtomEntry.edges} />
        </Box>
      </Log>
      <Strip />
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
      promo {
        title
        copy
      }
      gallery {
        title
        copy
        image {
          childImageSharp {
            fluid(maxHeight: 300, quality: 90) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        toPage
      }
      card {
        title
        copy {
          title
          copy
          image {
            childImageSharp {
              fluid(maxHeight: 60, quality: 90) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
      }
      log {
        title
        copy
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
