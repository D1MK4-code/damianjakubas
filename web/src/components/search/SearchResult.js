import React from 'react';
import { useFlexSearch } from 'react-use-flexsearch';
import Paragraph from '../typo/Paragraph';
import {
  AuthorsSearchResultItem,
  BlogSearchResultItem,
  CategorySearchResultItem,
} from './SearchResultItem';

function SearchResult({
  searchQuery,
  blogsIndexStore,
  categoriesIndexStore,
  authorsIndexStore,
}) {
  const blogsResult = useFlexSearch(
    searchQuery,
    JSON.stringify(blogsIndexStore.index),
    blogsIndexStore.store
  );
  const categoriesResult = useFlexSearch(
    searchQuery,
    JSON.stringify(categoriesIndexStore.index),
    categoriesIndexStore.store
  );
  const authorsResult = useFlexSearch(
    searchQuery,
    JSON.stringify(authorsIndexStore.index),
    authorsIndexStore.store
  );

  if (
    blogsResult.length === 0 &&
    categoriesResult.length === 0 &&
    authorsResult.length === 0
  ) {
    return <Paragraph> No results found </Paragraph>;
  }

  return (
    <>
      {blogsResult.length > 0 && (
        <>
          <Paragraph>Posts</Paragraph>
          {blogsResult.map((result) => (
            <BlogSearchResultItem key={result.id} blog={result} />
          ))}
        </>
      )}
      {categoriesResult.length > 0 && (
        <>
          <Paragraph>Categories</Paragraph>
          {categoriesResult.map((result) => (
            <CategorySearchResultItem key={result.id} category={result} />
          ))}
        </>
      )}
      {authorsResult.length > 0 && (
        <>
          <Paragraph>Authors</Paragraph>
          {authorsResult.map((result) => (
            <AuthorsSearchResultItem key={result.id} author={result} />
          ))}
        </>
      )}
    </>
  );
}

export default SearchResult;
