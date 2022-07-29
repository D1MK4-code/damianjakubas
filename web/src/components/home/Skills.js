import React from 'react';
import { SkillsStyles } from '../../styles/home/SkillsStyles';
import { SectionTitle } from '../typo/Title';
import iconHtml from '../../images/icon-html.svg';
import iconCss from '../../images/icon-css.svg';
import iconSass from '../../images/icon-sass.svg';
import iconJs from '../../images/icon-javascript.svg';
import iconJquery from '../../images/icon-jquery.svg';
import iconWp from '../../images/icon-wordpress.svg';
import iconBs from '../../images/icon-bootstrap.svg';
import iconReact from '../../images/icon-react.svg';
import iconGatsby from '../../images/icon-gatsby.svg';
import iconNext from '../../images/icon-next.svg';

function Skills() {
  return (
    <SkillsStyles>
      <div className="left">
        <SectionTitle>Skills</SectionTitle>
        <div className="skills-wrapper">
          <figure>
            <img
              src={iconHtml}
              alt="HTML logo"
              className="skill-img"
              loading="lazy"
            />
          </figure>
          <figure>
            <img
              src={iconCss}
              alt="CSS logo"
              className="skill-img"
              loading="lazy"
            />
          </figure>
          <figure>
            <img
              src={iconSass}
              alt="SASS logo"
              className="skill-img"
              loading="lazy"
            />
          </figure>
          <figure>
            <img
              src={iconJs}
              alt="JS logo"
              className="skill-img"
              loading="lazy"
            />
          </figure>
          <figure>
            <img
              src={iconJquery}
              alt="jQuery logo"
              className="skill-img"
              loading="lazy"
            />
          </figure>
          <figure>
            <img
              src={iconWp}
              alt="Wordpress logo"
              className="skill-img"
              loading="lazy"
            />
          </figure>
          <figure>
            <img
              src={iconBs}
              alt="Bootstrap logo"
              className="skill-img"
              loading="lazy"
            />
          </figure>
        </div>
        <p className="basic">Basic Experience:</p>
        <div className="skills-wrapper">
          <figure>
            <img
              src={iconReact}
              alt="React.js logo"
              className="skill-img"
              loading="lazy"
            />
          </figure>
          <figure>
            <img
              src={iconGatsby}
              alt="Gatsby.js logo"
              className="skill-img"
              loading="lazy"
            />
          </figure>
          <figure>
            <img
              src={iconNext}
              alt="Next.js logo"
              className="skill-img large"
              loading="lazy"
            />
          </figure>
        </div>
      </div>
      <div className="right">
        <SectionTitle>Experience</SectionTitle>

        <div className="single-job">
          <span className="year">
            <strong>2020</strong>
          </span>
          <div>
            <p className="job">
              <strong>Frontend Web Developer</strong>
            </p>
            <a
              href="https://otree.tech/"
              target="_blank"
              className="company"
              rel="noreferrer"
            >
              OTree.Tech
            </a>
            <div className="info">
              <p>
                I’ve started as a Junior Developer, now I am implementing new
                features, fixing bugs and trying to be a mentor for new
                teammates.
              </p>
            </div>
          </div>
        </div>
      </div>
    </SkillsStyles>
  );
}

export default Skills;
