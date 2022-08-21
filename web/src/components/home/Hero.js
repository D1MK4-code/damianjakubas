import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import HeroStyles from '../../styles/home/HeroStyles';
import Button from '../buttons/Button';
import Paragraph from '../typo/Paragraph';
import heroPattern from '../../images/hero-pattern.svg';
import heroPatternBig from '../../images/hero-pattern-big.svg';

function Hero() {
  return (
    <HeroStyles>
      <div className="container">
        <div className="left">
          <figure>
            <img
              src={heroPatternBig}
              alt="hero pattern"
              className="hero-pattern-1"
            />
          </figure>

        </div>
        <div className="right">
          <h1>
            Hello 🖐️ <br /> I'm Damian!
          </h1>
          <Paragraph className="hero-text">
            I'm Front-end Developer, <br />
            working at{' '}
            <a href="https://otree.tech/" target="_blank" rel="noreferrer">
              OTree.tech
            </a>{' '}
            from October 2020 <br /> (almost 2 years now). <br />
            Currently learning React
          </Paragraph>
          <Button to="/posts">Blog posts</Button>
        </div>
        <figure>
          <img
            src={heroPattern}
            alt="hero pattern"
            className="hero-pattern-2"
          />
        </figure>
      </div>
    </HeroStyles>
  );
}

export default Hero;
