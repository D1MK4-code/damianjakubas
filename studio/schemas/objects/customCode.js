import CodeIcon from '@mui/icons-material/Code';

export default {
  name: 'customCode',
  title: 'Code',
  type: 'object',
  icon: CodeIcon,
  fields: [
    {
      name: 'code',
      title: 'Code',
      type: 'code',
    },
  ],
  preview: {
    select: {
      title: 'code.code',
    },
  },
};
