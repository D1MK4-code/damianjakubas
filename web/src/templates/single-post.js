import React from 'react';
import { graphql, Link } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import { format } from 'date-fns';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import CategoryIcon from '@mui/icons-material/Category';
import PersonIcon from '@mui/icons-material/Person';
import { DiscussionEmbed } from 'disqus-react';
import { SinglePostStyles } from '../styles/posts/SinglePostStyles';
import SEO from '../Seo/SEO';
import PageSpace from '../components/PageSpace';
import { Title } from '../components/typo/Title';
import Paragraph from '../components/typo/Paragraph';
import PortableTextComponent from '../components/PortableTextComponent';

export const postQuery = graphql`
  query SinglePostQuery($id: String!) {
    sanityBlog(id: { eq: $id }) {
      title
      publishedAt
      _rawBody
      slug {
        current
      }
      coverImage {
        asset {
          gatsbyImageData
        }
        alt
      }
      categories {
        title
        slug {
          current
        }
      }
      author {
        name
        slug {
          current
        }
      }
    }
  }
`;

function SinglePost({ data }) {
  const post = data.sanityBlog;
  console.log(post);

  const baseUrl = 'https://damianjakubas.vercel.app/posts/';

  const disqusConfig = {
    shortname: process.env.GATSBY_DISQUS_NAME,
    config: {
      url: baseUrl + post.slug.current,
      identifier: post.title,
      title: post.title,
    },
  };

  return (
    <SinglePostStyles>
      <SEO title={post.title} />
      <PageSpace top={80} bottom={100}>
        <div className="container">
          <div className="post-header">
            <GatsbyImage
              image={post.coverImage.asset.gatsbyImageData}
              alt="post.coverImage.alt"
              className="post-image"
            />
            <Title className="post-title">{post.title}</Title>
            <Paragraph className="published-at">
              <CalendarTodayIcon />
              {format(new Date(post.publishedAt), 'MMM dd yyyy')}
            </Paragraph>
            <Paragraph className="categories-text">
              <CategoryIcon />
              {post.categories.map((item, index) => (
                <span key={item.slug.current}>
                  <Link to={`/categories/${item.slug.current}`}>
                    {item.title}
                  </Link>
                  {index < post.categories.length - 1 ? ', ' : ''}
                </span>
              ))}
            </Paragraph>
            <Paragraph className="post-author">
              <PersonIcon />
              <Link to={`/authors/${post.author.slug.current}`}>
                {post.author.name}
              </Link>
            </Paragraph>
          </div>
          <div className="post-body">
            <PortableTextComponent value={post._rawBody} />
          </div>
          <DiscussionEmbed {...disqusConfig} />
        </div>
      </PageSpace>
    </SinglePostStyles>
  );
}

export default SinglePost;
