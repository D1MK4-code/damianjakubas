import React from 'react';
import { graphql } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import PageSpace from '../components/PageSpace';
import SEO from '../Seo/SEO';
import { SingleAuthorStyles } from '../styles/author/SingleAuthorStyles';
import { Title } from '../components/typo/Title';
import PortableTextComponent from '../components/PortableTextComponent';
import PostsGrid from '../components/posts/PostsGrid';

export const authorQuery = graphql`
  query SingleAuthorQuery($id: String!) {
    sanityAuthor(id: { eq: $id }) {
      name
      _rawBio
      profileImage {
        alt
        asset {
          gatsbyImageData
        }
      }
    }
    allSanityBlog(filter: { author: { id: { eq: $id } } }) {
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

function SingleAuthor({ data }) {
  const author = data.sanityAuthor;
  const posts = data.allSanityBlog.nodes;

  return (
    <PageSpace top={80} bottom={100}>
      <SEO title={author.name} />
      <div className="container">
        <SingleAuthorStyles>
          <div className="author-header">
            <GatsbyImage
              image={author.profileImage.asset.gatsbyImageData}
              alt="author.profileImage.alt"
              className="profileImage"
            />
            <Title className="name">{author.name}</Title>
            <div className="bio">
              <PortableTextComponent value={author._rawBio} />
            </div>
          </div>
          <hr />
          <PostsGrid posts={posts} />
        </SingleAuthorStyles>
      </div>
    </PageSpace>
  );
}

export default SingleAuthor;
