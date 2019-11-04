import React from "react"
import { Breadcrumb, CtaLink, RelatedLinks } from "cruk-pattern-library-api"

import Layout from "../components/layout"
import Content from "../components/content"
import SEO from "../components/seo"

const ConditionsPage = ({ pageContext: { page } }) => (
  <Layout>
    <SEO title={page.name} />

    <div className="cr-layout__row cr-layout__row--100">
      <div className="cr-layout__cell">
        {page.breadcrumb && (
          <Breadcrumb
            crumbs={page.breadcrumb.itemListElement
              .sort((a, b) => a.position > b.position)
              .map(crumb => ({
                href: crumb.item["@id"],
                label: crumb.item.name,
              }))}
          />
        )}

        <h1>{page.name}</h1>

        <div className="cr-layout__row cr-layout__row--66-33">
          <div className="cr-layout__cell">
            <Content entities={page.mainEntityOfPage} />
          </div>

          <div className="cr-layout__cell">
            {page.relatedLink && (
              <RelatedLinks
                title="Related links"
                content={page.relatedLink
                  .sort((a, b) => a.position > b.position)
                  .map(relatedLink => (
                    <CtaLink href={relatedLink.url} text={relatedLink.name} />
                  ))}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  </Layout>
)

export default ConditionsPage
