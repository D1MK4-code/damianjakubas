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
          <StaticImage
            className="hero-image"
            src="../../images/hero.png"
            alt="hero image"
            placeholder="none"
            objectPosition="50% 50%"
          />
        </div>
        <div className="right">
          <h1>
            Hello 🖐️ <br /> I'm Damian!
          </h1>
          <Paragraph className="hero-text">
            I'm Front-end Developer, <br />
            working at{' '}
            <a href="https://cyberfolks.pl/" target="_blank" rel="noreferrer">
              cyber_Folks
            </a>{' '}
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
