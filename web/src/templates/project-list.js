import React from 'react';
import { graphql } from 'gatsby';
import SEO from '../Seo/SEO';
import PageSpace from '../components/PageSpace';
import PageHeader from '../components/PageHeader';
import ProjectsGrid from '../components/projects/ProjectGrid';
import Pagination from '../components/Pagination';

export const ProjectsQuery = graphql`
  query projectListQuery($limit: Int!, $offset: Int!) {
    allSanityProject(limit: $limit, skip: $offset) {
      nodes {
        id
        title
        slug {
          current
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

function ProjectList({ data, pageContext }) {
  const { currentPage, numberOfPages } = pageContext;
  const projects = data.allSanityProject.nodes;
  console.log(projects);
  return (
    <>
      <SEO title="projects" />
      <PageSpace top={100} bottom={80}>
        <div className="container">
          <PageHeader
            title="All Projects"
            description="Hello, welcome to projects page"
          />
          <ProjectsGrid projects={projects} />
          {numberOfPages > 1 && (
            <Pagination
              currentPage={currentPage}
              numberOfPages={numberOfPages}
              baseURL="/projects"
            />
          )}
        </div>
      </PageSpace>
    </>
  );
}

export default ProjectList;
