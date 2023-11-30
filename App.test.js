import { render, screen } from "@testing-library/react-native";

import App from "./App";

test("should render a view with input and button", () => {
  // Arrange
  const { getByPlaceholderText, getByText } = render(<App />);

  // Act
  const inputElement = getByPlaceholderText("Your course goal!");
  const buttonElement = getByText("Add Goal");

  const button = screen.getByText(/add goal/i);

  // Assert
  expect(inputElement).toBeTruthy();
  expect(buttonElement).toBeVisible();
  expect(button).toBeVisible();
});
