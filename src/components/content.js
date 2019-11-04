/**
 * MainEntityOfPage component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import ReactHtmlParser, { convertNodeToElement } from "react-html-parser"
import PropTypes from "prop-types"

const transform = node => {
  // content was a prewritten snippet of html, add some required pattern
  // library classes

  if (node.type === "tag" && node.name === "ol") {
    node.attribs.class = "cr-list cr-list--ordered"
  }

  if (node.type === "tag" && node.name === "ul") {
    node.attribs.class = "cr-list cr-list--unordered"
  }

  if (node.type === "tag" && node.name === "li") {
    node.attribs.class = "cr-list__item"
  }

  return convertNodeToElement(node)
}

const Content = ({ entities }) => {
  return entities
    .sort((a, b) => a.position > b.position)
    .map(entity => {
      if (entity.mainEntityOfPage) {
        return (
          <Content entities={entity.mainEntityOfPage} key={entity.position} />
        )
      }

      return ReactHtmlParser(entity.text, { transform })
    })
}

Content.propTypes = {
  entities: PropTypes.array,
}

export default Content
