import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { TopCategoriesStyles } from '../../styles/home/TopCategoriesStyles';
import Paragraph from '../typo/Paragraph';
import { SectionTitle } from '../typo/Title';
import CategoryGrid from '../category/CategoryGrid';

function TopCategories() {
  const data = useStaticQuery(graphql`
    {
      allSanityFeatured(filter: { _id: { eq: "featuredItems" } }) {
        nodes {
          category {
            id
            title
            slug {
              current
            }
            _rawDescription
          }
        }
      }
    }
  `);
  const categories = data.allSanityFeatured.nodes[0].category;

  return (
    <TopCategoriesStyles>
      <div className="container">
        <SectionTitle>Top Categories</SectionTitle>
        <Paragraph className="info">
          Explore the categories containing the most posts.
        </Paragraph>
        <CategoryGrid categories={categories} />
      </div>
    </TopCategoriesStyles>
  );
}

export default TopCategories;
