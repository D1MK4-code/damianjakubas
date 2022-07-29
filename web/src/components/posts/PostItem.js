import { Link } from 'gatsby';
import React from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';
import { format } from 'date-fns';
import { PostItemStyles } from '../../styles/posts/PostItemStyles';
import { Title } from '../typo/Title';
import Paragraph from '../typo/Paragraph';

function PostItem({ title, path, image, publishedAt, categories }) {
  return (
    <PostItemStyles>
      <Link to={`/posts/${path}`}>
        <GatsbyImage
          image={image.imageData}
          alt={image.altText}
          className="image"
          objectFit="cover"
          loading="lazy"
          objectPosition="50% 50%"
        />
      </Link>
      <Link to={`/posts/${path}`}>
        <Title>{title}</Title>
      </Link>
      {publishedAt && (
        <Paragraph className="published-at">
          {format(new Date(publishedAt), ' MMMM dd yyyy')}
        </Paragraph>
      )}
      <Paragraph className="categories-text">
        {categories.map((item, index) => (
          <span key={item.slug.current}>
            <Link to={`/categories/${item.slug.current}`}>{item.title}</Link>
            {index < categories.length - 1 ? ', ' : ''}
          </span>
        ))}
      </Paragraph>
    </PostItemStyles>
  );
}

export default PostItem;
