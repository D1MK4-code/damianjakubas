import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { FeaturedPostsStyles } from '../../styles/home/FeaturedPostsStyles';
import { SectionTitle } from '../typo/Title';
import Paragraph from '../typo/Paragraph';
import PostsGrid from '../posts/PostsGrid';

function FeaturedPosts() {
  const data = useStaticQuery(graphql`
    {
      allSanityFeatured(filter: { _id: { eq: "featuredItems" } }) {
        nodes {
          posts {
            title
            id
            publishedAt
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
            slug {
              current
            }
          }
        }
      }
    }
  `);

  const featuredPosts = data.allSanityFeatured.nodes[0].posts;

  return (
    <FeaturedPostsStyles>
      <SectionTitle>FeaturedPosts</SectionTitle>
      <Paragraph>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Est ratione
        fugit maxime temporibus ullam, ipsa sed illo voluptates nihil et!
      </Paragraph>
      <PostsGrid posts={featuredPosts} />
    </FeaturedPostsStyles>
  );
}

export default FeaturedPosts;
