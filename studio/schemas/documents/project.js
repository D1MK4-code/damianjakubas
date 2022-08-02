import FolderIcon from '@mui/icons-material/Folder';
import { format } from 'date-fns';

export default {
  title: 'Project',
  name: 'project',
  type: 'document',
  icon: FolderIcon,
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string',
    },
    {
      title: 'Slug',
      name: 'slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: '64',
      },
    },
    {
      title: 'Cover Image',
      name: 'coverImage',
      type: 'customImage',
      options: {
        hotspot: true,
      },
    },
    {
      title: 'Excerpt',
      name: 'excerpt',
      type: 'normalText',
    },
    {
      title: 'Post Body',
      name: 'body',
      type: 'richText',
    },
  ],
  preview: {
    select: {
      image: 'coverImage',
      title: 'title',
    },
    prepare({ image, title }) {
      return {
        title,
        media: image,
      };
    },
  },
};
