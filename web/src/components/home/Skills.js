import React from 'react';
import { SkillsStyles } from '../../styles/home/SkillsStyles';
import { SectionTitle, SecondTitle } from '../typo/Title';
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
import iconGsap from '../../images/icon-gsap.svg';
import iconShadcn from '../../images/icon-shadcn.svg';
import iconTailwind from '../../images/icon-tailwind.svg';
import iconSupabase from '../../images/icon-supabase.svg';
import iconMongodb from '../../images/icon-mongodb.svg';
import iconNextauth from '../../images/icon-nextauth.png';
import iconTypescript from '../../images/icon-typescript.svg';
import iconVite from '../../images/icon-vite.svg';
import iconWebpack from '../../images/icon-webpack.svg';

function Skills() {
  return (
    <SkillsStyles>
      <div className="left">
        <SecondTitle>Skills</SecondTitle>
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
          <figure>
            <img
              src={iconGsap}
              alt="GSAP3 logo"
              className="skill-img"
              loading="lazy"
            />
          </figure>
          <figure>
            <img
              src={iconShadcn}
              alt="ShadCN logo"
              className="skill-img"
              loading="lazy"
            />
          </figure>
          <figure>
            <img
              src={iconTailwind}
              alt="Tailwind CSS logo"
              className="skill-img"
              loading="lazy"
            />
          </figure>
          <figure>
            <img
              src={iconSupabase}
              alt="Supabase logo"
              className="skill-img"
              loading="lazy"
            />
          </figure>
          <figure>
            <img
              src={iconMongodb}
              alt="MongoDB logo"
              className="skill-img"
              loading="lazy"
            />
          </figure>
          <figure>
            <img
              src={iconNextauth}
              alt="NextAuth logo"
              className="skill-img"
              loading="lazy"
            />
          </figure>
          <figure>
            <img
              src={iconTypescript}
              alt="Typescript logo"
              className="skill-img"
              loading="lazy"
            />
          </figure>
          <figure>
            <img
              src={iconVite}
              alt="Vite.js logo"
              className="skill-img"
              loading="lazy"
            />
          </figure>
          <figure>
            <img
              src={iconWebpack}
              alt="Webpack logo"
              className="skill-img"
              loading="lazy"
            />
          </figure>
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

        <div className="single-job">
          <span className="year">
            <strong>2023</strong>
          </span>
          <div>
            <p className="job">
              <strong>Frontend Web Developer</strong>
            </p>
            <a
              href="https://cyberfolks.pl/"
              target="_blank"
              className="company"
              rel="noreferrer"
            >
              cyber_Folks
            </a>
            <div className="info">
              <p>
                Developing _Stores SaaS and other company's products.
              </p>
            </div>
          </div>
        </div>
      </div>
    </SkillsStyles>
  );
}

export default Skills;
