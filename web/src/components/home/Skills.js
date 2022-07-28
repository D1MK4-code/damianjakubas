import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import { SkillsStyles } from '../../styles/home/SkillsStyles';
import { SectionTitle } from '../typo/Title';

function Skills() {
  return (
    <SkillsStyles>
      <div className="left">
        <SectionTitle>Skills</SectionTitle>
        <div className="skills-wrapper">
          <StaticImage
            className="skill-img"
            src="../../images/icon-html.svg"
            alt="html logo"
            placeholder="none"
            objectPosition="50% 50%"
            layout="fixed"
            width={40}
            height={40}
          />
          <StaticImage
            className="skill-img"
            src="../../images/icon-css.svg"
            alt="css logo"
            placeholder="none"
            objectPosition="50% 50%"
            layout="fixed"
            width={40}
            height={40}
          />
          <StaticImage
            className="skill-img"
            src="../../images/icon-sass.svg"
            alt="sass logo"
            placeholder="none"
            objectPosition="50% 50%"
            layout="fixed"
            width={40}
            height={40}
          />
          <StaticImage
            className="skill-img"
            src="../../images/icon-javascript.svg"
            alt="javascript logo"
            placeholder="none"
            objectPosition="50% 50%"
            layout="fixed"
            width={40}
            height={40}
          />
          <StaticImage
            className="skill-img"
            src="../../images/icon-jquery.svg"
            alt="jquery logo"
            placeholder="none"
            objectPosition="50% 50%"
            layout="fixed"
            width={40}
            height={40}
          />
          <StaticImage
            className="skill-img"
            src="../../images/icon-wordpress.svg"
            alt="wordpress logo"
            placeholder="none"
            objectPosition="50% 50%"
            layout="fixed"
            width={40}
            height={40}
          />
          <StaticImage
            className="skill-img"
            src="../../images/icon-bootstrap.svg"
            alt="bootstrap logo"
            placeholder="none"
            objectPosition="50% 50%"
            layout="fixed"
            width={40}
            height={40}
          />
        </div>
        <p className="basic">Basic Experience:</p>
        <div className="skills-wrapper">
          <StaticImage
            className="skill-img"
            src="../../images/icon-react.svg"
            alt="react logo"
            placeholder="none"
            objectPosition="50% 50%"
            layout="fixed"
            width={40}
            height={40}
          />
          <StaticImage
            className="skill-img"
            src="../../images/icon-gatsby.svg"
            alt="gatsby logo"
            placeholder="none"
            objectPosition="50% 50%"
            layout="fixed"
            width={40}
            height={40}
          />
          <StaticImage
            className="skill-img"
            src="../../images/icon-next.svg"
            alt="next logo"
            placeholder="none"
            objectPosition="50% 50%"
            layout="fixed"
            width={80}
            height={40}
          />
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
