import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />

    <div className="cr-layout__row cr-layout__row--100">
      <div className="cr-layout__cell">
        <h1>NOT FOUND</h1>
        <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
      </div>
    </div>
  </Layout>
)

export default NotFoundPage
