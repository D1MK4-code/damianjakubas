import StarIcon from '@mui/icons-material/Star';

export default {
  name: 'featured',
  title: 'Featured',
  type: 'document',
  icon: StarIcon,
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string',
    },
    {
      name: 'posts',
      title: 'Featured Posts',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'blog' }],
        },
      ],
      validation: (Rule) => [
        Rule.error('Every item should be unique').unique(),
        Rule.required().error('At least one item is required'),
      ],
    },
    {
      name: 'category',
      title: 'Featured Categories',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'category' }],
        },
      ],
      validation: (Rule) => [
        Rule.error('Every item should be unique').unique(),
        Rule.required().error('At least one item is required'),
      ],
    },
  ],
};
