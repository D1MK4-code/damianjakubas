import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import HeroStyles from '../../styles/home/HeroStyles';
import Button from '../buttons/Button';
import Paragraph from '../typo/Paragraph';

function Hero() {
  return (
    <HeroStyles>
      <div className="container">
        <div className="left">
          <StaticImage
            className="hero-pattern-1"
            src="../../images/hero-pattern-big.svg"
            alt="hero pattern"
            placeholder="none"
            objectFit="contain"
            objectPosition="0% 0%"
          />
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
            <a href="https://otree.tech/" target="_blank" rel="noreferrer">
              OTree.tech
            </a>{' '}
            from October 2020 <br /> (almost 2 years now). <br />
            Currently learning React
          </Paragraph>
          <Button to="/posts">Blog posts</Button>
        </div>
        <StaticImage
          className="hero-pattern-2"
          src="../../images/hero-pattern.svg"
          alt="hero pattern"
          placeholder="none"
          objectFit="contain"
          objectPosition="50% 50%"
        />
      </div>
    </HeroStyles>
  );
}

export default Hero;
