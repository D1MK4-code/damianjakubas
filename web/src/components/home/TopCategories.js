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
      <SectionTitle>Top Categories</SectionTitle>
      <Paragraph className="info">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam,
        facilis. Porro reiciendis eaque vel, eos corrupti velit quisquam sequi
        laborum alias nam nostrum et magnam aut cupiditate ipsam, ab quod.
      </Paragraph>
      <CategoryGrid categories={categories} />
    </TopCategoriesStyles>
  );
}

export default TopCategories;
