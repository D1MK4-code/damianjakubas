exports.createPages = async ({ graphql, actions }) => {
  const postsPerPage = parseInt(process.env.GATSBY_POST_PER_PAGE) || 10;
  // template paths
  const singlePostTemplate = require.resolve('./src/templates/single-post.js');
  const singleProjectTemplate = require.resolve(
    './src/templates/single-project.js'
  );
  const blogListTemplate = require.resolve('./src/templates/blog-list.js');
  const projectListTemplate = require.resolve(
    './src/templates/project-list.js'
  );
  const singleCategoryTemplate = require.resolve(
    './src/templates/single-category.js'
  );
  const categoryListTemplate = require.resolve(
    './src/templates/category-list.js'
  );
  const authorListTemplate = require.resolve('./src/templates/author-list.js');
  const singleAuthorTemplate = require.resolve(
    './src/templates/single-author.js'
  );
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
      allSanityProject {
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
  const projects = result.data.allSanityProject.nodes;
  const categories = result.data.allSanityCategory.nodes;
  const authors = result.data.allSanityAuthor.nodes;

  // single posts pages
  posts.forEach((post) => {
    createPage({
      path: `/posts/${post.slug.current}`,
      component: singlePostTemplate,
      context: { id: post.id },
    });
  });

  // single projects pages
  projects.forEach((project) => {
    createPage({
      path: `/projects/${project.slug.current}`,
      component: singleProjectTemplate,
      context: { id: project.id },
    });
  });

  // single category pages
  categories.forEach((category) => {
    createPage({
      path: `/categories/${category.slug.current}`,
      component: singleCategoryTemplate,
      context: { id: category.id },
    });
  });

  // single authors pages
  authors.forEach((author) => {
    createPage({
      path: `/authors/${author.slug.current}`,
      component: singleAuthorTemplate,
      context: { id: author.id },
    });
  });

  // blog-list pages
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

  // project-list pages
  const totalProjectListPages = Math.ceil(projects.length / postsPerPage);
  Array.from({ length: totalProjectListPages }).forEach((_, index) => {
    createPage({
      path: index === 0 ? '/projects' : `/projects/${index + 1}`,
      component: projectListTemplate,
      context: {
        limit: postsPerPage,
        offset: index * postsPerPage,
        numberOfPages: totalProjectListPages,
        currentPage: index + 1,
      },
    });
  });

  // category-list pages
  const totalCategoryListPages = Math.ceil(categories.length / postsPerPage);
  Array.from({ length: totalCategoryListPages }).forEach((_, index) => {
    createPage({
      path: index === 0 ? '/categories' : `/categories/${index + 1}`,
      component: categoryListTemplate,
      context: {
        limit: postsPerPage,
        offset: index * postsPerPage,
        numberOfPages: totalCategoryListPages,
        currentPage: index + 1,
      },
    });
  });

  // author-list pages
  const totalAuthorListPages = Math.ceil(authors.length / postsPerPage);
  Array.from({ length: totalAuthorListPages }).forEach((_, index) => {
    createPage({
      path: index === 0 ? '/authors' : `/authors/${index + 1}`,
      component: authorListTemplate,
      context: {
        limit: postsPerPage,
        offset: index * postsPerPage,
        numberOfPages: totalAuthorListPages,
        currentPage: index + 1,
      },
    });
  });
};
