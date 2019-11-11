/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import { Header, Footer } from "cruk-pattern-library-api"
import React from "react"
import PropTypes from "prop-types"

import "cruk-pattern-library-api/lib/all.css"

const Layout = ({ children }) => {
  return (
    <>
      <Header
        logoSrc="https://www.cancerresearchuk.org/sites/all/themes/custom/cruk/cruk-logo.svg"
        logoTitle="Cancer Research UK Homepage"
        logoAlt="Cancer Research UK"
        logoHref="/"
        slogan="Together we will beat cancer"
        ctaHref="https://find.cancerresearchuk.org/"
        ctaText="Search..."
      />

      {children}

      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
