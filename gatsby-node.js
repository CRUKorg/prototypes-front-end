const path = require('path');
const DirectoryNamedWebpackPlugin = require('directory-named-webpack-plugin');

exports.onCreateWebpackConfig = ({
  stage,
  getConfig,
  rules,
  loaders,
  actions,
}) => {
  actions.setWebpackConfig({
    resolve: {
      modules: [path.resolve(__dirname, 'src'), 'node_modules'],
      plugins: [new DirectoryNamedWebpackPlugin({
        exclude: /node_modules/
      })],
    },
  });
};

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;
  return graphql(
    `
      {
        allContentfulGeneral {
          edges {
            node {
              id
              slug
            }
          }
        }
      }
    `
  ).then(
    result => {
      if (result.errors) {
        console.log('Error retrieving contentful data', result.errors);
      }
      const postTemplate = path.resolve('./src/templates/post.js');
      result.data.allContentfulGeneral.edges.forEach(edge => {
        createPage({
          path: `/content/post/${edge.node.slug}/`,
          component: postTemplate,
          context: {
            slug: edge.node.slug,
            id: edge.node.id,
          },
        });
      });
    })
    .catch(error => {
      console.log('Error retrieving contentful data', error);
    });
};
