import React from 'react';
import { graphql } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import PageSpace from '../components/PageSpace';
import { SingleCategoryStyles } from '../styles/category/SingleCategoryStyles';
import SEO from '../Seo/SEO';
import PageHeader from '../components/PageHeader';
import PortableTextComponent from '../components/PortableTextComponent';
import PostsGrid from '../components/posts/PostsGrid';

export const query = graphql`
  query SingleCategory($id: String!) {
    sanityCategory(id: { eq: $id }) {
      title
      _rawDescription
      coverImage {
        asset {
          gatsbyImageData
        }
        alt
      }
    }
    allSanityBlog(filter: { categories: { elemMatch: { id: { eq: $id } } } }) {
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

function SingleCategory({ data }) {
  const category = data.sanityCategory;
  const posts = data.allSanityBlog.nodes;
  return (
    <PageSpace top={100} bottom={80}>
      <SingleCategoryStyles>
        <div className="container">
          <SEO title={category.title} />
          <PageHeader
            title={category.title}
            className="page-header single-category-header"
          >
            <PortableTextComponent value={category._rawDescription} />
            <GatsbyImage
              image={category.coverImage.asset.gatsbyImageData}
              className="cover-image"
              alt={category.coverImage.alt}
              objectFit="cover"
              objectPosition="50% 50%"
            />
          </PageHeader>
          <PostsGrid posts={posts} />
        </div>
      </SingleCategoryStyles>
    </PageSpace>
  );
}

export default SingleCategory;
