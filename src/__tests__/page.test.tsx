import { render, screen } from '@testing-library/react';
import Page from '../app/page';

// Mocking Hero component with displayName
jest.mock('@/components/Hero', () => {
  const Hero = () => <div data-testid="hero-component">Hero Component</div>;
  Hero.displayName = 'Hero'; // Adding displayName
  return Hero;
});

// Mocking Carousel component with displayName
jest.mock('@/components/Carousel', () => {
  const Carousel = () => <div data-testid="carousel-component">Carousel Component</div>;
  Carousel.displayName = 'Carousel'; // Adding displayName
  return Carousel;
});

describe('Landing Page', () => {
  it('renders Hero and Carousel components with correct content', () => {
    render(<Page />);

    // Check if the mocked Hero component is in the document and contains the correct text
    expect(screen.getByTestId('hero-component')).toBeInTheDocument();
    expect(screen.getByText('Hero Component')).toBeInTheDocument();

    // Check if the mocked Carousel component is in the document and contains the correct text
    expect(screen.getByTestId('carousel-component')).toBeInTheDocument();
    expect(screen.getByText('Carousel Component')).toBeInTheDocument();
  });
});
