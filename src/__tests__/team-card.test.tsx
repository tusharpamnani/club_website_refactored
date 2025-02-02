import { render, screen } from "@testing-library/react";
import { TeamCard } from "../components/ui/team-card";  // Adjust the import path
import { TeamMember } from "../types/team";  // Adjust the import path

// Mock the SocialLinks component for this test
jest.mock("../components/social-links", () => ({
  __esModule: true,
  default: () => <div data-testid="social-links">Social Links</div>,
}));

// Mock next/image to return a regular <img> for testing
jest.mock("next/image", () => ({
  __esModule: true,
  default: (props: any) => <img {...props} />, // Just return a regular <img> element
}));

describe("TeamCard", () => {
  const member: TeamMember = {
    name: "John Doe",
    position: "Software Engineer",
    profilePic: "/profile-pic.jpg",
    alt: "John's profile picture",
    socials: {
      instagram: "https://instagram.com/johndoe",
      linkedin: "https://linkedin.com/in/johndoe",
    },
  };

  it("renders the team card with correct data", () => {
    render(<TeamCard member={member} gradient="linear-gradient(to right, #ff7e5f, #feb47b)" />);

    // Test for profile image
    const image = screen.getByAltText(member.alt);
    expect(image).toHaveAttribute("src", member.profilePic); // Now this works because we're not using Next.js Image optimization

    // Test for name and position
    expect(screen.getByText(member.name)).toBeInTheDocument();
    expect(screen.getByText(member.position)).toBeInTheDocument();

    // Test for social links component
    expect(screen.getByTestId("social-links")).toBeInTheDocument();
  });

  it("displays a placeholder image if no profile picture is provided", () => {
    const memberWithoutPic = { ...member, profilePic: undefined };
    render(<TeamCard member={memberWithoutPic} gradient="linear-gradient(to right, #ff7e5f, #feb47b)" />);

    const image = screen.getByAltText(member.alt);
    expect(image).toHaveAttribute("src", "/placeholder.svg");
  });
});
