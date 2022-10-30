import React, { useState } from 'react';
import Nav from '../Nav';
import About from '../About';

function Portfolio() {
  // state of current page
  const [currentPage, handlePageChange] = useState('About');

  const renderPage = () => {
    // switch statement that will return the appropriate component of the 'currentPage'
    switch (currentPage) {
      case 'about':
        return <About></About>;

      default:
        return <About></About>;
    }
  };

  return (
    <div>
      <Nav currentPage={currentPage} handlePageChange={handlePageChange} />
      <div>
        {
          // Render the component returned by 'renderPage()'
          renderPage()
        }
      </div>
    </div>
  );
}

export default Portfolio;