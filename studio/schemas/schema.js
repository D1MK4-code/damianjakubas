/* eslint-disable */
import createSchema from 'part:@sanity/base/schema-creator';
import schemaTypes from 'all:part:@sanity/base/schema-type';
/* eslint-enable */

// objects
import customImage from './objects/customImage';
import customCode from './objects/customCode';
import richText from './objects/richText';
import normalText from './objects/normalText';

// documents
import blog from './documents/blog';
import author from './documents/author';
import category from './documents/category';
import featured from './documents/featured';
import project from './documents/project';

export default createSchema({
  name: 'default',
  types: schemaTypes.concat([
    // objects
    customImage,
    customCode,
    richText,
    normalText,

    // documents
    blog,
    author,
    category,
    featured,
    project,
  ]),
});
