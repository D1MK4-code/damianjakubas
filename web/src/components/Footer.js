import React from 'react';
import { Link } from 'gatsby';
import { navbar } from '../static/navbar';
import { socials } from '../static/socials';
import Logo from './Logo';
import Paragraph from './typo/Paragraph';
import FooterStyles from '../styles/FooterStyles';

function Footer() {
  return (
    <FooterStyles>
      <div className="container">
        <Logo />
        <ul className="footer-nav">
          {navbar.map((item) => (
            <li key={item.path}>
              <Link to={item.path}>{item.title}</Link>
            </li>
          ))}
        </ul>
        <ul className="footer-socials">
          {socials.map((item) => (
            <li key={item.name}>
              <a href={item.url} target="_blank" rel="noreferrer">
                {item.icon} {item.name}
              </a>
            </li>

          ))}
        </ul>
        <Paragraph>© Damian Jakubas {new Date().getFullYear()}</Paragraph>
      </div>
    </FooterStyles>
  );
}

export default Footer;
