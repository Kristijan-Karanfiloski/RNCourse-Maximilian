import { fireEvent, render, screen } from "@testing-library/react-native";

import App from "./App";

describe("Render App.js", () => {
  it("should render a button", () => {
    // Arrange
    render(<App />);
    // Act
    const button = screen.getByText(/add new goal/i);
    // Assert
    expect(button).toBeVisible();
  });
  it("should open a modal when pressing the add new goal btn", async () => {
    // Arrange
    render(<App />);
    // Act
    const button = screen.getByText(/add new goal/i);

    fireEvent.press(button);

    const modal = await screen.queryByTestId(/test-modal/i);

    // Assert
    expect(modal).toBeVisible();
  });
});
