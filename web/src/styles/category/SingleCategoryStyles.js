import styled from 'styled-components';

export const SingleCategoryStyles = styled.div`
  .page-header {
    position: relative;
    padding: 1.5rem;
    z-index: 1;
    border: 1px solid var(--primary);
    .cover-image {
      position: absolute;
      top: 0;
      right: 0;
      width: 8rem;
      height: 8rem;
      z-index: -1;
    }
    p {
      max-width: 30rem;
    }
    &.single-category-header {
      margin-bottom: 2rem;
    }
  }

  @media (min-width: 576px) {
    .page-header {
      padding: 2rem;
      .cover-image {
        width: 200px;
        height: 100%;
      }
    }
  }
  @media (min-width: 768px) {
    .page-header {
      p {
        max-width: 100%;
      }
      &.single-category-header {
        margin-bottom: 3rem;
      }
    }
  }
`;
