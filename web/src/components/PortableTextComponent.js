import React from 'react';
import { PortableText } from '@portabletext/react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import theme from 'react-syntax-highlighter/dist/esm/styles/prism/vs-dark';
import { getImage, getImageDimensions } from '@sanity/asset-utils';
import { GatsbyImage } from 'gatsby-plugin-image';
import Paragraph from './typo/Paragraph';
import { Title } from './typo/Title';
import sanityConfig from '../../sanity-config';
import { getSanityImageData } from '../utils/getSanityImageData';

const portableTextComponents = {
  block: {
    normal: ({ children }) => <Paragraph>{children}</Paragraph>,
    h1: ({ children }) => <Title>{children}</Title>,
  },
  types: {
    customCode: ({ value }) => (
      <SyntaxHighlighter
        style={theme}
        className="post-body-code"
        language={value.code.language}
      >
        {String(value.code.code).replace(/\n$/, '')}
      </SyntaxHighlighter>
    ),
    customImage: ({ value }) => {
      const imageData = getImage(value.asset, sanityConfig).asset;
      const { width, height } = getImageDimensions(value);

      const image = {
        url: imageData.url,
        height,
        width,
      };

      const gatsbyImageData = getSanityImageData({
        image,
        layout: 'constrained',
      });
      return (
        <GatsbyImage
          image={gatsbyImageData}
          alt={value.alt}
          className="post-body-image"
        />
      );
    },
  },
};

function PortableTextComponent({ value }) {
  return <PortableText value={value} components={portableTextComponents} />;
}

export default PortableTextComponent;
