import PersonIcon from '@mui/icons-material/Person';

export default {
  title: 'Author',
  name: 'author',
  type: 'document',
  icon: PersonIcon,
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      title: 'Slug',
      name: 'slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: '64',
      },
    },
    {
      title: 'Profile Image',
      name: 'profileImage',
      type: 'customImage',
    },
    {
      title: 'Bio',
      name: 'bio',
      type: 'normalText',
    },
  ],
  preview: {
    select: {
      title: 'name',
      image: 'profileImage',
      slug: 'slug',
    },
    prepare({ title, image, slug }) {
      return {
        title,
        media: image,
        subtitle: slug.current,
      };
    },
  },
};
