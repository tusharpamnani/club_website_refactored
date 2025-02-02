import { render, screen, fireEvent } from "@testing-library/react";
import TeamSection from "../app/about/page"; // Ensure correct path
import teamData from "../data/TeamMembers.json"; // Assuming the data is correctly imported

// Mocking the typing effect hook
jest.mock("../hooks/typinghook", () => ({
  __esModule: true,
  default: jest.fn().mockImplementation((text, delay, visible) => visible ? text : ''),
}));

// Mocking icon components to avoid rendering actual SVGs
jest.mock("lucide-react", () => ({
  Trophy: () => <svg />,
  Award: () => <svg />,
  ChevronRight: () => <svg />,
}));

// Mocking SocialLinks component
jest.mock("../components/social-links", () => ({
  __esModule: true,
  default: () => <div data-testid="social-links">Social Links</div>,
}));

describe("TeamSection", () => {
  it("displays team sections correctly", () => {
    render(<TeamSection />);
    teamData.forEach((section) => {
      expect(screen.getByText(section.title)).toBeInTheDocument();
      section.members.forEach((member) => {
        expect(screen.getByText(member.name)).toBeInTheDocument(); // Assuming `name` exists in the member object
      });
    });
  });

  it("doesn't display the scroll button if there is only one member", async () => {
    render(<TeamSection />);

    // Wait for the section with a single member (e.g., "Faculty Incharges")
    const facultyInchargesSection = await screen.findByText("Faculty Incharges");

    // Check if the scroll button is not present in the "Faculty Incharges" section
    const scrollButton = facultyInchargesSection.closest("div")?.querySelector("button[aria-label='Scroll right']");
    expect(scrollButton).toBeNull(); // Should not be in the DOM
  });

  it("handles the scroll button click", async () => {
    render(<TeamSection />);

    // Use a specific test ID to target the button (e.g., "scroll-button-The Core Committee")
    const button = screen.getByTestId("scroll-button-The Core Committee");
    fireEvent.click(button);
    expect(button).toBeInTheDocument(); // Ensure the button is still in the DOM after clicking
  });
});
