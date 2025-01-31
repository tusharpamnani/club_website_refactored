import { render, screen } from "@testing-library/react";
import Achievements from "../app/achivements/page";

// Mocking external components for isolated testing
jest.mock("@/components/ui/Card", () => ({
  Card: ({ children }: { children: React.ReactNode }) => <div data-testid="card">{children}</div>,
  CardContent: ({ children }: { children: React.ReactNode }) => <div data-testid="card-content">{children}</div>,
}));

// Mocking icon components to avoid rendering actual SVGs
jest.mock("lucide-react", () => ({
  Trophy: () => <svg />,
  Award: () => <svg />,
  ChevronRight: () => <svg />,
}));


// Test suite for Achievements page
describe("Achievements Page", () => {

  // Test case for checking if Achievements section is rendered
  it("renders Achievements section", () => {
    render(<Achievements />);
    // Assert that 'Our Achievements' text is in the document
    expect(screen.getByText(/Our Achievements/i)).toBeInTheDocument();
  });

  // Test case for checking if a specific achiever is rendered (e.g., 'Nupur Hada')
  it("renders achievers", () => {
    render(<Achievements />);
    // Assert that 'Nupur Hada' name is displayed in the document
    expect(screen.getByText(/Nupur Hada/i)).toBeInTheDocument();
  });

  // Test case for checking if Awards & Recognition section is rendered
  it("renders awards", () => {
    render(<Achievements />);
    // Assert that 'Awards & Recognition' text is in the document
    expect(screen.getByText(/Awards & Recognition/i)).toBeInTheDocument();
  });
});
