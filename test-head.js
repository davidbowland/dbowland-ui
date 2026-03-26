// Quick test to check if next/head sets document.title
const { render } = require('@testing-library/react');
const React = require('react');
const Head = require('next/head').default;

const TestComponent = () => {
  return React.createElement(
    React.Fragment,
    null,
    React.createElement(
      Head,
      null,
      React.createElement('title', null, 'Test Title')
    ),
    React.createElement('div', null, 'Test Content')
  );
};

const result = render(React.createElement(TestComponent));
console.log('document.title:', document.title);
console.log('HTML:', result.container.innerHTML);
