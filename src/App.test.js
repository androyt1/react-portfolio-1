import { render, screen } from '@testing-library/react';
import App from './App';

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

test('Display a text on the document',()=>{
  render(<App />);
  const paragraph = screen.getByText(/Aghoghovwia/i)
  expect(paragraph).toBeInTheDocument();
}) 

test('Displays button on page',()=>{
  render(<App/>)
  const button=screen.getByRole('button',{name:'click'})
  expect(button).toBeInTheDocument()
})