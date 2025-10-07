import React from 'react';
import Header from '../components/Header';
import ThemeToggle from '../components/ThemeToggle';

const ArticlePage = ({ title, children, customCSS }) => {
  return (
    <>
      <Header />
      <ThemeToggle />
      
      {/* Custom CSS for this article */}
      {customCSS && <style>{customCSS}</style>}
      
      {/* Article content */}
      {children}
    </>
  );
};

export default ArticlePage;
