import { GatsbyImage } from 'gatsby-plugin-image';
import React, { useContext } from 'react';
import { format } from 'date-fns';
import { SearchResultItemStyles } from '../../styles/search/SearchResultItemStyles';
import Paragraph from '../typo/Paragraph';
import { Title } from '../typo/Title';
import { SearchModalContext } from '../../context/searchModalContext';

function BlogSearchResultItem({ blog }) {
  const { closeSearchModal } = useContext(SearchModalContext);
  return (
    <SearchResultItemStyles
      to={`/posts/${blog.slug.current}`}
      onClick={closeSearchModal}
    >
      <GatsbyImage
        image={blog.coverImage.asset.gatsbyImageData}
        className="search-img"
      />
      <div>
        <Title className="search-title">{blog.title}</Title>
        <Paragraph className="datetime">
          {format(new Date(blog.publishedAt), 'MMM dd yyyy')}
        </Paragraph>
      </div>
    </SearchResultItemStyles>
  );
}

function CategorySearchResultItem({ category }) {
  const { closeSearchModal } = useContext(SearchModalContext);

  return (
    <SearchResultItemStyles
      to={`/categories/${category.slug.current}`}
      onClick={closeSearchModal}
    >
      <Title className="title">{category.title}</Title>
    </SearchResultItemStyles>
  );
}

function AuthorsSearchResultItem({ author }) {
  const { closeSearchModal } = useContext(SearchModalContext);

  return (
    <SearchResultItemStyles
      to={`/authors/${author.slug.current}`}
      onClick={closeSearchModal}
    >
      <GatsbyImage
        image={author.profileImage.asset.gatsbyImageData}
        alt={author.profileImage.alt}
        className="author-image"
      />
      <Title className="title">{author.name}</Title>
    </SearchResultItemStyles>
  );
}

export {
  BlogSearchResultItem,
  CategorySearchResultItem,
  AuthorsSearchResultItem,
};
