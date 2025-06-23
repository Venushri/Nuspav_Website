import React from 'react';

const HelpContent = ({ selected }) => {
  switch (selected) {
    case 'order':
      return <p>Here are steps to resolve order related queries.</p>;
    case 'nonorder':
      return <p>Details for non-order issues like account, settings etc.</p>;
    case 'recent':
      return <p>Here are your recent support requests or chat history.</p>;
    case 'faq':
      return <p>List of FAQs.</p>;
    default:
      return <p>Select a query type to get started.</p>;
  }
};

export default HelpContent;
