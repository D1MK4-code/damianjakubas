import React from 'react';
import Hero from '../components/home/Hero';
import SEO from '../Seo/SEO';
import FeaturedPosts from '../components/home/FeaturedPosts';
import TopCategories from '../components/home/TopCategories';
import Skills from '../components/home/Skills';

const IndexPage = () => (
  <>
    <SEO />
    <Hero />
    <div className="container">
      <Skills />
    </div>
    <FeaturedPosts />
    <TopCategories />
  </>
);

export default IndexPage;
