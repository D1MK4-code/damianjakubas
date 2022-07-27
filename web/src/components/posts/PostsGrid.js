import React from 'react';
import { PostsGridStyles } from '../../styles/posts/PostsGridStyles';
import PostItem from './PostItem';

function PostsGrid({ posts }) {
  return (
    <PostsGridStyles>
      {posts &&
        posts.map((post) => (
          <PostItem
            key={post.id}
            title={post.title}
            path={post.slug.current}
            categories={post.categories}
            image={{
              imageData: post.coverImage.asset.gatsbyImageData,
              altText: post.coverImage.alt,
            }}
            publishedAt={post.publishedAt}
          />
        ))}
    </PostsGridStyles>
  );
}

export default PostsGrid;
