import React from 'react';
import './blog.css';

function Faq() {
  return (
    <div className="faq-container">
      <h2 className="faq-question">1. What is the Contecx API?</h2>
      <p className="faq-answer">The Contecx API is a software development tool that offers various features and functionalities, such as data retrieval, data analysis, and data visualization. It can be used to develop applications for a wide range of industries, including healthcare, finance, and retail.</p>

      <h2 className="faq-question">2. What are semantic tags in HTML?</h2>
      <p className="faq-answer">Semantic tags in HTML are used to provide a more meaningful and descriptive structure to a webpage's content. This can improve website accessibility and search engine optimization, as it helps search engines and assistive technologies understand the content better.</p>

      <h2 className="faq-question">3. What is the difference between inline block and inline elements in CSS?</h2>
      <p className="faq-answer">The key difference between inline block and inline elements in CSS is that inline block elements allow for padding, margin, and border to be added, while inline elements cannot have these properties added. Inline block elements are often used for creating layout elements like menus, buttons, and columns, while inline elements are generally used for smaller elements like text and links.</p>
    </div>
  );
}

export default Faq;
