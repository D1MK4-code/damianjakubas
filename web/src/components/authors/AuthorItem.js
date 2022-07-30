import { GatsbyImage } from 'gatsby-plugin-image';
import React from 'react';
import { AuthorItemStyles } from '../../styles/author/AuthorItemStyles';
import { Title } from '../typo/Title';

function AuthorItem({ profileImage, name, slug }) {
  return (
    <AuthorItemStyles to={slug.current} className="author-item">
      <GatsbyImage
        image={profileImage.asset.gatsbyImageData}
        alt={profileImage.asset.alt}
        className="profile-image"
        ObjectPosition="50% 40%"
      />
      <Title>{name}</Title>
    </AuthorItemStyles>
  );
}

export default AuthorItem;
