import styled from 'styled-components';

export const SkillsStyles = styled.div`
  padding: 6rem 0 3rem;
  display: flex;
  flex-wrap: wrap;
  h3 {
    font-size: 3rem;
    margin-bottom: 4rem;
    display: block;
    width: 100%;
  }
  .skills-wrapper {
    display: flex;
    flex-wrap: wrap;
    gap: 2rem;
    margin-bottom: 4rem;
  }
  .basic {
    font-size: 1.6rem;
    margin-bottom: 2rem;
    color: var(--primary);
  }
  .right {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    h3 {
      &:before {
        max-width: 11rem;
      }
    }
    .single-job {
      width: 100%;
      display: flex;
    }
    .year {
      font-size: 1.4rem;
      margin-right: 3rem;
    }
    .job {
      color: var(--primary);
      font-size: 1.6rem;
      margin-bottom: 0.5rem;
    }
    .company {
      font-size: 1.2rem;
    }
    .info {
      padding: 1.5rem 0;
      p {
        font-size: 1.4rem;
      }
    }
  }
  .skill-img {
    width: 4rem;
    height: 4rem;
    object-fit: contain;
    &.large {
      width: 8rem;
    }
  }
  @media (min-width: 768px) {
    .left,
    .right {
      width: 50%;
    }
    .left {
      padding-right: 1.5rem;
    }
    .right {
      padding-left: 1.5rem;
    }
    .basic {
      font-size: 1.8rem;
    }
  }
  @media (min-width: 992px) {
    padding: 8rem 0 4rem;
    .basic {
      font-size: 2rem;
    }
    h3 {
      font-size: 4rem;
    }
    .year {
      font-size: 1.6rem;
      margin-right: 4rem;
    }
    .job {
      font-size: 1.8rem;
    }
    .company {
      font-size: 1.4rem;
    }
  }
`;
