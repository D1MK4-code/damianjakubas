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
          <h1>Web Developer</h1>
          <Paragraph>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam
            maiores, pariatur soluta aut aspernatur saepe vel deserunt, sapiente
            ex iusto inventore cumque distinctio culpa! Ab molestiae suscipit
            nam ex velit.
          </Paragraph>
          <Button to="/blog">Blog</Button>
        </div>
        <div className="right">
          <StaticImage
            className="hero-image"
            src="../../images/hero.jpg"
            alt="hero image"
            placeholder="none"
            objectPosition="50% 50%"
          />
        </div>
      </div>
    </HeroStyles>
  );
}

export default Hero;
