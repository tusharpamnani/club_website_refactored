import { render, screen } from '@testing-library/react';
import Footer from '../components/Footer'; // Adjust the path according to your project structure
import '@testing-library/jest-dom';

describe('Footer Component', () => {
  it('should render the footer with the correct content', () => {
    render(<Footer />);

    // Check if "CODEBREAKERS" text is in the document
    expect(screen.getByText('CODEBREAKERS')).toBeInTheDocument();

    // Check if the "Seasoned. Nimble. Remote." text is in the document
    expect(screen.getByText('Seasoned. Nimble. Remote.')).toBeInTheDocument();

    // Check if the copyright statement is in the document
    expect(screen.getByText('Copyright Codebreakers')).toBeInTheDocument();

    // Check if the "Terms" link exists
    const termsLink = screen.getByText('Terms');
    expect(termsLink).toBeInTheDocument();
    expect(termsLink).toHaveAttribute('href', 'google.com');

    // Check if the "Privacy" link exists
    const privacyLink = screen.getByText('Privacy');
    expect(privacyLink).toBeInTheDocument();
    expect(privacyLink).toHaveAttribute('href', 'google.com');

    // Check if the "Cookies" link exists
    const cookiesLink = screen.getByText('Cookies');
    expect(cookiesLink).toBeInTheDocument();
    expect(cookiesLink).toHaveAttribute('href', 'google.com');

    // Check if the social media icons (LinkedIn, Instagram, Twitter) exist
    const linkedinIcon = screen.getByRole('link', { name: /LinkedIn/i });
    expect(linkedinIcon).toHaveAttribute('href', 'https://www.linkedin.com/company/thecodebreakers-rcoem/mycompany/verification/');

    const instagramIcon = screen.getByRole('link', { name: /Instagram/i });
    expect(instagramIcon).toHaveAttribute('href', 'https://www.instagram.com/thecodebreakers/');

    const twitterIcon = screen.getByRole('link', { name: /Twitter/i });
    expect(twitterIcon).toHaveAttribute('href', 'https://x.com/CodebreakersRBU');
  });

  it('should match the snapshot', () => {
    const { asFragment } = render(<Footer />);
    expect(asFragment()).toMatchSnapshot();
  });
});
