import React from 'react';
import { CategoryItemStyles } from '../../styles/category/CategoryItemStyles';
import Button from '../buttons/Button';
import PortableTextComponent from '../PortableTextComponent';
import { Title } from '../typo/Title';

function CategoryItem({ title, slug, description }) {
  return (
    <CategoryItemStyles>
      <Title className="title">{title}</Title>
      <div className="text">
        <PortableTextComponent value={description} />
      </div>
      <Button to={`/categories/${slug.current}`}>Explore Category</Button>
    </CategoryItemStyles>
  );
}

export default CategoryItem;
