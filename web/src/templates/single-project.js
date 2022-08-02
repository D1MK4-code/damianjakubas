import React from 'react';
import { graphql } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import { SingleProjectStyles } from '../styles/projects/SingleProjectStyles';
import SEO from '../Seo/SEO';
import PageSpace from '../components/PageSpace';
import { MainTitle } from '../components/typo/Title';
import PortableTextComponent from '../components/PortableTextComponent';

export const projectQuery = graphql`
  query SingleProjectQuery($id: String!) {
    sanityProject(id: { eq: $id }) {
      title
      _rawBody
      slug {
        current
      }
      coverImage {
        asset {
          gatsbyImageData
        }
        alt
      }
    }
  }
`;

function SingleProject({ data }) {
  const project = data.sanityProject;

  return (
    <SingleProjectStyles>
      <SEO title={project.title} />
      <PageSpace top={100} bottom={100}>
        <div className="container">
          <div className="post-header">
            <GatsbyImage
              image={project.coverImage.asset.gatsbyImageData}
              alt={project.coverImage.alt}
              className="post-image"
            />
            <MainTitle className="post-title">{project.title}</MainTitle>
          </div>
          <div className="post-body">
            <PortableTextComponent value={project._rawBody} />
          </div>
        </div>
      </PageSpace>
    </SingleProjectStyles>
  );
}

export default SingleProject;
