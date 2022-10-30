import styled from 'styled-components';

export const SinglePostStyles = styled.div`
  max-width: 75rem;
  margin: 0 auto;
  .post-image {
    height: 22.5rem;
    margin-bottom: 1.5rem;
    width: calc(100% + 3rem);
    margin-left: -1.5rem;
  }
  .post-header {
    .published-at,
    .categories-text,
    .post-author {
      display: flex;
      align-items: center;
      margin-bottom: 0.2rem;
      font-size: 1.3rem;
      text-align: left;
      font-weight: 400;
      font-family: 'DM Sans';
      color: var(--secondary);
      svg {
        margin-right: 0.5rem;
      }
      a {
        text-decoration: none;
        &:hover,
        &:focus {
          color: var(--button);
          text-decoration: underline;
        }
      }
      a,
      p,
      span {
        font-size: 1.3rem;
        color: var(--secondary);
      }
    }
    .post-author {
      margin-bottom: 3rem;
    }
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: 'DM Sans';
    &:before {
      display: none;
    }
  }
  p,
  a,
  li{
    font-size: 1.6rem;
    font-weight: 400;
    color: var(--primary);
    line-height: 1.6em;
  }
  strong {
    font-weight: 700;
    color: var(--primary);
  }
  em {
    color: var(--primary);
    font-weight: 500;
  }
  p {
    margin-bottom: 2rem;
    text-align: justify;
  }

  h1 {
    font-size: 2.5rem;
  }
  h2 {
    font-size: 2.2rem;
  }
  h3 {
    font-size: 2.1rem;
  }
  h2,
  h3,
  h4 {
    margin: 2rem 0 3rem;
  }

  .post-body {
    .gatsby-image-wrapper {
      margin: 3rem 0;
    }
    a {
      color: var(--button);
    }
    ul,
    ol {
      padding: 0 0 1rem 1.5rem;
      li {
        margin-bottom: 0.8rem;
      }
    }
    ul {
      list-style: disc;
    }
    ol {
      list-style: decimal;
    }
    .post-body-code {
      margin: 2rem 0 !important;
      font-size: 1.4rem;
    }
  }
  #disqus_thread {
    margin-top: 8rem;
  }
  @media (min-width: 575px) {
    .post-image {
      height: 30rem;
      margin-bottom: 2rem;
    }
  }
  @media (min-width: 768px) {
    .post-image {
      height: 35rem;
      margin-bottom: 2.5rem;
    }
    h1 {
      font-size: 2.8rem;
    }
    h2 {
      font-size: 2.5rem;
    }
    h3 {
      font-size: 2.4rem;
    }
  }
`;
