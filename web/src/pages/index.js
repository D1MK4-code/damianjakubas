import React from 'react';
import Hero from '../components/home/Hero';
import SEO from '../Seo/SEO';
import FeaturedPosts from '../components/home/FeaturedPosts';
import TopCategories from '../components/home/TopCategories';

const IndexPage = () => (
  <>
    <SEO />
    <Hero />
    <div className="container">
      <FeaturedPosts />
      <TopCategories />
    </div>
  </>
);

export default IndexPage;
