import React from 'react';

const categories = [
  { key: 'order', label: 'Order Related Queries' },
  { key: 'nonorder', label: 'Non-order Related Issues' },
  { key: 'recent', label: 'Recent Issues' },
  { key: 'faq', label: 'Frequently Asked Questions' },
];

const HelpSidebar = ({ selected, setSelected }) => {
  return (
    <div className="space-y-3 border-r pr-4">
      <h4 className="text-sm font-bold text-gray-800 mb-2">SELECT QUERY TYPE</h4>
      {categories.map(cat => (
        <div
          key={cat.key}
          className={`cursor-pointer text-sm px-2 py-1 rounded-md ${
            selected === cat.key
              ? 'text-teal-600 font-semibold bg-teal-100'
              : 'text-gray-700 hover:bg-gray-100'
          }`}
          onClick={() => setSelected(cat.key)}
        >
          {cat.label}
        </div>
      ))}
    </div>
  );
};

export default HelpSidebar;
