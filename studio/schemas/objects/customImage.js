import ImageIcon from '@mui/icons-material/Image';

export default {
  name: 'customImage',
  title: 'Image',
  type: 'image',
  icon: ImageIcon,
  options: {
    hotspot: true,
  },
  fields: [
    {
      title: 'Alt Text',
      name: 'alt',
      type: 'string',
      validation: (Rule) => Rule.error('Alt text cannot be empty').required(),
      options: {
        isHighlighted: true,
      },
    },
  ],
};
