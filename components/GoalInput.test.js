import { fireEvent, render, screen } from "@testing-library/react-native";
import GoalInput from "./GoalInput";
import App from "../App";

describe("Goal Input Component", () => {
  it("should render the Modal", async () => {
    render(<GoalInput />);

    const modal = await screen.getByTestId("test-modal");

    expect(modal).toBeVisible();
  });

  it("should render the modal with text input", () => {
    const CHANGE_text1 = "content";
    const CHANGE_text2 = "";
    const visible = true;
    const addGoalFn = jest.fn();

    render(<GoalInput addGoalHandlerParentFn={addGoalFn} visble={visible} />);
    // const appComponent = render(<App />);

    const input = screen.getByPlaceholderText("Your course goal!");
    const addGoalButton = screen.getByText(/add goal/i);

    // fireEvent.changeText(input, CHANGE_text2);
    fireEvent.changeText(input, CHANGE_text1);
    fireEvent.press(addGoalButton);
    //
    // expect(addGoalFn).not.toHaveBeenCalledWith();
    expect(addGoalFn).toHaveBeenCalled();
    // expect(appComponent).toBeVisible();
  });
});
