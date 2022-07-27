import { Link } from 'gatsby';
import React from 'react';
import PageSpace from '../components/PageSpace';
import Paragraph from '../components/typo/Paragraph';
import { SectionTitle } from '../components/typo/Title';
import { NotFoundPageStyles } from '../styles/NotFoundPageStyles';

function NotFoundPage() {
  return (
    <PageSpace>
      <div className="container">
        <NotFoundPageStyles>
          <SectionTitle>{404}</SectionTitle>
          <Paragraph>
            The page you are looking for is not found, sorry :(
            <br />
            <Link to="/" className="link">
              Go back
            </Link>
          </Paragraph>
        </NotFoundPageStyles>
      </div>
    </PageSpace>
  );
}

export default NotFoundPage;
