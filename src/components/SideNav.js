import React from 'react';
import PropTypes from 'prop-types';
import { graphql, Link, StaticQuery } from 'gatsby';
import styled from 'styled-components';
import MEDIA from 'helpers/mediaTemplates';
import { COLORS } from 'constants/constants';
import { UTILITIES } from '../constants/constants';

const Arrow = styled.input`
  width: 16px;
  height: 16px;
  opacity: 0;
  z-index: 2;
  position: absolute;
`;

const ArrowLabel = styled.label`
  padding-left: 24px;
`;

const Side = styled.div`
  color: ${COLORS.white};
  background-color: ${COLORS.primary};
  padding: 32px 16px;
  ${MEDIA.TABLET`
    position: fixed;
    left: -250px;
    top: 60px;
    height: 100vh;
    width: 90%;
    max-width: 250px;
  `};
  ${MEDIA.MIN_TABLET`
    width: 320px;
    max-width: 320px;
    min-width: 320px;
    margin-bottom: -5000px;
    padding-bottom: 5000px;
  `};
  li {
    display: block;
    padding-top: 0;
    padding-bottom: 0;
    padding-left: 10px;
  }
  ul {
    margin: 0;
    padding: 0;
    position: relative;
    list-style: none;
    ul {
      border-left: 5px solid #ccc;
      margin-left: 10px;
    }
  }
  a {
    color: ${COLORS.white};
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
  i {
    border: solid white;
    border-width: 0 2px 2px 0;
    display: inline-block;
    padding: 4px;
    transform: rotate(-45deg);
    transition: transform 0.3s, -webkit-transform 0.3s;
    position: absolute;
    top: 6px;
    left: 2px;
  }
  input,
  label {
    display: block;
    cursor: pointer;
  }
  ${Arrow}:checked ~ ${ArrowLabel} i {
    transform: rotate(45deg);
  }
  ${Arrow} ~ div {
    height: 0;
    overflow: hidden;
  }
  ${Arrow}:checked ~ div {
    height: auto;
  }
  div {
    position: relative;
  }
  h5 {
    margin: 0 0 16px 0;
  }
`;
const TopLevel = styled.div``;
const SecondLevel = styled.div`
  padding-left: 24px;
`;
const NavBlock = styled.div`
  margin-bottom: 24px;
`;
const NavItem = styled.div`
  padding-left: 16px;
`;
const SlideBtnLabel = styled.label`
  span {
    border: solid ${COLORS.white};
    border-width: 0 2px 2px 0;
    display: inline-block;
    padding: 5px;
    transform: rotate(-45deg);
    transition: transform 0.3s, -webkit-transform 0.3s;
    margin-top: 6px;
    margin-left: 3px;
  }
  position: fixed;
  top: 60px;
  left: 0;
  width: 27px;
  height: 27px;
  cursor: pointer;
  background-color: ${COLORS.primary};
  border-left: 0;
  border-radius: 0 ${UTILITIES.borderRadius} ${UTILITIES.borderRadius} 0;
  ${MEDIA.MIN_TABLET`
    display: none;
  `};
`;

const SlideBtn = styled.input`
  position: fixed;
  top: 60px;
  left: 0;
  width: 27px;
  height: 27px;
  display: block;
  opacity: 0;
  margin: 0;
  &:checked {
    left: 0;
  }
  &:checked ~ ${SlideBtnLabel} {
    span {
      transform: rotate(135deg);
      margin-left: 8px;
    }
    left: 250px;
  }
  &:checked ~ div {
    left: 0;
  }
  ${MEDIA.MIN_TABLET`
    display: none;
  `};
`;

const SideNav = props => {
  return (
    <StaticQuery
      query={graphql`
        query {
          allContentfulSidebar {
            edges {
              node {
                category {
                  category
                }
                navBlocks {
                  title
                  navigationItem {
                    childPages {
                      childPages {
                        childPages {
                          menuTitle
                          slug
                          title
                        }
                        menuTitle
                        slug
                        title
                      }
                      menuTitle
                      slug
                      title
                    }
                    menuTitle
                    slug
                    title
                  }
                }
              }
            }
          }
        }
      `}
      render={data => {
        const filter = data.allContentfulSidebar.edges.filter(
          p => p.node.category.category === props.category
        );
        const accordion = (slug, title, menuTitle, hasChildPages) => {
          const linkTo = <Link to={`/${slug}`}>{menuTitle || title}</Link>;
          return hasChildPages !== null ? (
            <React.Fragment>
              <Arrow type="checkbox" id={slug} name={slug} />
              <ArrowLabel htmlFor={slug}>
                <i />
                {linkTo}
              </ArrowLabel>
            </React.Fragment>
          ) : (
            <React.Fragment>{linkTo}</React.Fragment>
          );
        };
        const listing = filter[0].node.navBlocks || {};
        const navBlock = listing.map((nav, i) => {
          return (
            <NavBlock key={i}>
              <h5>{nav.title}</h5>
              <NavItem>
                {nav.navigationItem &&
                  nav.navigationItem.map((level1, i) => (
                    <TopLevel key={i}>
                      {accordion(
                        level1.slug,
                        level1.title,
                        level1.menuTitle,
                        level1.childPages
                      )}
                      {level1.childPages && (
                        <SecondLevel>
                          {level1.childPages.map((level2, i) => (
                            <div key={i}>
                              {accordion(
                                level2.slug,
                                level2.title,
                                level2.menuTitle,
                                level2.childPages
                              )}
                              {level2.childPages && (
                                <div>
                                  {level2.childPages.map((level3, i) => (
                                    <div key={i}>
                                      {accordion(
                                        level3.slug,
                                        level3.title,
                                        level3.menuTitle,
                                        level3.childPages
                                      )}
                                    </div>
                                  ))}
                                </div>
                              )}
                            </div>
                          ))}
                        </SecondLevel>
                      )}
                    </TopLevel>
                  ))}
              </NavItem>
            </NavBlock>
          );
        });
        return (
          <React.Fragment>
            <SlideBtn type="checkbox" id="slide-nav" name="slide-nav" />
            <SlideBtnLabel htmlFor="slide-nav">
              <span />
            </SlideBtnLabel>
            <Side>{navBlock}</Side>
          </React.Fragment>
        );
      }}
    />
  );
};

SideNav.propTypes = {
  data: PropTypes.object,
  category: PropTypes.any,
};

export default SideNav;
