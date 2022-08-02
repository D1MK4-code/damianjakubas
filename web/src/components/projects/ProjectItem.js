import { Link } from 'gatsby';
import React from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';
import { ProjectItemStyles } from '../../styles/projects/ProjectItemStyles';
import { Title } from '../typo/Title';

function ProjectItem({ title, path, image }) {
  return (
    <ProjectItemStyles>
      <Link to={`/projects/${path}`}>
        <GatsbyImage
          image={image.imageData}
          alt={image.altText}
          className="image"
          objectFit="cover"
          loading="lazy"
          objectPosition="50% 50%"
        />
      </Link>
      <Link to={`/projects/${path}`}>
        <Title>{title}</Title>
      </Link>
    </ProjectItemStyles>
  );
}

export default ProjectItem;
