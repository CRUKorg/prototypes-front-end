/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

const fetch = require("node-fetch")

const get = async path => {
  const res = await fetch(`https://api.nhs.uk/${path}`, {
    headers: { "subscription-key": process.env.NHS_API_KEY },
  })
  const json = await res.json()
  return [path, json]
}

const getPages = async paths => await Promise.all(paths.map(get))

exports.createPages = async ({ actions: { createPage } }) => {
  const pages = await getPages(["conditions/lung-cancer"])

  pages.forEach(([path, page]) => {
    createPage({
      path: `/${path}`,
      component: require.resolve("./src/templates/conditions"),
      context: { page },
    })
  })
}
