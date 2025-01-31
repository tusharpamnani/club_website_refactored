import { render, screen } from '@testing-library/react';
import Page from '../app/page';

jest.mock('@/components/Hero', () => () => <div data-testid="hero-component">Hero Component</div>);
jest.mock('@/components/Carousel', () => () => <div data-testid="carousel-component">Carousel Component</div>);

describe('Landing Page', () => {
  it('renders Home and Carousel components', () => {
    render(<Page />);

    expect(screen.getByTestId('hero-component')).toBeInTheDocument();
    expect(screen.getByTestId('carousel-component')).toBeInTheDocument();
  });
});
