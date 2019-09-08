import React from 'react';
import PropTypes from 'prop-types';
import { graphql, Link, StaticQuery } from 'gatsby';
import styled from 'styled-components';
import { COLORS } from 'constants/constants';

const Side = styled.div`
  width: 100%;
  max-width: 320px;
  color: ${COLORS.white};
  background-color: ${COLORS.primary};
  padding: 32px 16px;
  margin-bottom: -5000px;
  padding-bottom: 5000px;
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
  input {
    width: 16px;
    height: 16px;
    display: block;
    opacity: 0;
    z-index: 2;
    position: absolute;
    cursor: pointer;
  }
  label {
    cursor: pointer;
    padding-left: 24px;
  }
  input:checked ~ label i {
    transform: rotate(45deg);
  }
  input ~ div {
    height: 0;
    overflow: hidden;
  }
  input:checked ~ div {
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
const SideNav = props => {
  return (
    <StaticQuery
      query={graphql`
        query {
          allContentfulNavigation {
            nodes {
              sectionTitle
              title
              category
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
      `}
      render={data => {
        const filter = data.allContentfulNavigation.nodes.filter(
          p => p.category === props.category
        );
        const listing = filter[0] || {};
        const accordion = (slug, title, menuTitle, hasChildPages) => {
          const linkTo = <Link to={`/${slug}`}>{menuTitle || title}</Link>;
          return hasChildPages !== null ? (
            <React.Fragment>
              <input type="checkbox" id={slug} name={slug} />
              <label htmlFor={slug}>
                <i />
                {linkTo}
              </label>
            </React.Fragment>
          ) : (
            <React.Fragment>{linkTo}</React.Fragment>
          );
        };
        return (
          <Side>
            {listing.sectionTitle && <h5>{listing.sectionTitle}</h5>}
            {listing.navigationItem &&
              listing.navigationItem.map((level1, i) => (
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
          </Side>
        );
      }}
    />
  );
};

SideNav.propTypes = {
  data: PropTypes.Object,
  category: PropTypes.any,
};

export default SideNav;
