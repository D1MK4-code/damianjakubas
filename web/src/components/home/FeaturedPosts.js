import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { FeaturedPostsStyles } from '../../styles/home/FeaturedPostsStyles';
import { SectionTitle } from '../typo/Title';
import Paragraph from '../typo/Paragraph';
import PostsGrid from '../posts/PostsGrid';
import heroPattern from '../../images/hero-pattern.svg';

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
      <div className="container">
        <figure>
          <img
            src={heroPattern}
            alt="hero pattern"
            className="hero-pattern-2"
          />
        </figure>
        <SectionTitle>Recent Posts</SectionTitle>
        <Paragraph className="info">
          Some recent posts, I'm currently writing about JavaScript and its
          features.
        </Paragraph>
        <PostsGrid posts={featuredPosts} />
      </div>
    </FeaturedPostsStyles>
  );
}

export default FeaturedPosts;
