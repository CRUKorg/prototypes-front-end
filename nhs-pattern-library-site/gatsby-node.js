/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

const fetch = require("node-fetch")

const getPage = async path => {
  const res = await fetch(`https://api.nhs.uk/${path}`, {
    headers: { "subscription-key": process.env.NHS_API_KEY },
  })

  if (!res.ok) {
    throw new Error(`Bad response from API: ${res.status} ${res.statusText}`)
  }

  const page = await res.json()
  return { path, page }
}

exports.createPages = async ({ actions: { createPage }, cache }) => {
  // List of paths to fetch from the API and create pages from
  const paths = [
    "conditions/lung-cancer",
    "conditions/lung-cancer/symptoms",
    "conditions/lung-cancer/causes",
    "conditions/lung-cancer/diagnosis",
    "conditions/lung-cancer/treatment",
    "conditions/lung-cancer/living-with",
    "conditions/lung-cancer/prevention",
  ]

  const cachePages = await Promise.all(
    paths.map(async path => {
      // Unique cache key for each path
      const key = `nhs-api:${path}`

      // Promise resolves with page object fetched from cache
      let cachedPage = await cache.get(key)

      // Check if page object was fetched from the cache, and that its expiry
      // time has not passed
      if (cachedPage && cachedPage.expires > Date.now()) {
        // Fresh: Return the page object
        return cachedPage
      } else {
        // Stale: Either the page object did not exist in the cache, or its
        // expiry time has passed

        // Create a new page object
        //   expires: 24 hours from now
        //   page: Decoded JSON response from the api
        cachePage = {
          expires: Date.now() + 86400,
          page: await getPage(path),
        }

        // Put the new page object in the cache, returning a Promise that
        // resolves with the new page object
        return cache.set(key, cachePage)
      }
    })
  )

  const pages = cachePages.map(cachePage => cachePage.page)

  pages.forEach(({ path, page }) => {
    createPage({
      path: `/${path}`,
      component: require.resolve("./src/templates/conditions"),
      context: { page },
    })
  })
}
