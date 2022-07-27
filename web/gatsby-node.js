exports.createPages = async ({ graphql, actions }) => {
  const postsPerPage = parseInt(process.env.GATSBY_POST_PER_PAGE) || 10;
  // template paths
  const singlePostTemplate = require.resolve('./src/templates/single-post.js');
  const blogListTemplate = require.resolve('./src/templates/blog-list.js');

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

  const totalBlogListPages = Math.ceil(posts.length / postsPerPage);
  Array.from({ length: totalBlogListPages }).forEach((_, index) => {
    createPage({
      path: index === 0 ? '/posts' : `/posts/${index + 1}`,
      component: blogListTemplate,
      context: {
        limit: postsPerPage,
        offset: index * postsPerPage,
        numberOfPages: totalBlogListPages,
        currentPage: index + 1,
      },
    });
  });
};