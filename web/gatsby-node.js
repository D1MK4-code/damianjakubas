exports.createPages = async ({ graphql, actions }) => {
  // template paths
  const singlePostTemplate = require.resolve('./src/templates/single-post.js');

  const { createPage } = actions;

  const result = await graphql(`
    {
      allSanityBlog {
        nodes {
          id
          slug {
            current
          }
        }
      }
      allSanityCategory {
        nodes {
          id
          slug {
            current
          }
        }
      }
      allSanityAuthor {
        nodes {
          id
          slug {
            current
          }
        }
      }
    }
  `);

  if (result.errors) throw result.errors;
  const posts = result.data.allSanityBlog.nodes;

  // single posts pages
  posts.forEach((post) => {
    createPage({
      path: `/posts/${post.slug.current}`,
      component: singlePostTemplate,
      context: { id: post.id },
    });
  });
};
