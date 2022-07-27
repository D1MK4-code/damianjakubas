import React from 'react';
import { graphql } from 'gatsby';
import SEO from '../Seo/SEO';
import PageSpace from '../components/PageSpace';
import PageHeader from '../components/PageHeader';
import PostsGrid from '../components/posts/PostsGrid';
import Pagination from '../components/Pagination';

export const BlogsQuery = graphql`
  query blogListQuery($limit: Int!, $offset: Int!) {
    allSanityBlog(
      sort: { fields: publishedAt, order: DESC }
      limit: $limit
      skip: $offset
    ) {
      nodes {
        id
        title
        publishedAt
        slug {
          current
        }
        categories {
          title
          slug {
            current
          }
        }
        coverImage {
          alt
          asset {
            gatsbyImageData
          }
        }
      }
    }
  }
`;

function BlogList({ data, pageContext }) {
  const { currentPage, numberOfPages } = pageContext;
  const posts = data.allSanityBlog.nodes;
  return (
    <>
      <SEO title="posts" />
      <PageSpace top={80} bottom={100}>
        <div className="container">
          <PageHeader
            title="All Blog Posts"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, cumque veritatis asperiores enim reiciendis vero error inventore quis soluta explicabo?"
          />
          <PostsGrid posts={posts} />
          {numberOfPages > 1 && (
            <Pagination
              currentPage={currentPage}
              numberOfPages={numberOfPages}
              baseURL="/posts"
            />
          )}
        </div>
      </PageSpace>
    </>
  );
}

export default BlogList;
