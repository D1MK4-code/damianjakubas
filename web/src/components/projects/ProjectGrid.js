import React from 'react';
import { ProjectsGridStyles } from '../../styles/projects/ProjectsGridStyles';
import ProjectGrid from './ProjectItem';

function PostsGrid({ projects }) {
  return (
    <ProjectsGridStyles>
      {projects &&
        projects.map((project) => (
          <ProjectGrid
            key={project.id}
            title={project.title}
            path={project.slug.current}
            image={{
              imageData: project.coverImage.asset.gatsbyImageData,
              altText: project.coverImage.alt,
            }}
          />
        ))}
    </ProjectsGridStyles>
  );
}

export default PostsGrid;
