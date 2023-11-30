import { Button, TextInput, View, StyleSheet } from "react-native";
import { useState } from "react";

const GoalInput = ({ addGoalHandlerParentFn }) => {
  const [enteredGoalText, setEnteredGoalText] = useState("");

  const goalInputHandler = (inputTextValue) => {
    setEnteredGoalText(inputTextValue);
    // console.log("ENTERED TEXT", enteredText);
  };

  const addGoalHandlerChildFn = () => {
    if (!enteredGoalText) {
      console.log("Input cant be empty");
      return;
    }
    addGoalHandlerParentFn(enteredGoalText);
    setEnteredGoalText("");
  };

  return (
    <>
      <View style={styles.inputContainer}>
        <TextInput
          onChangeText={goalInputHandler}
          style={styles.textInput}
          placeholder="Your course goal!"
          value={enteredGoalText}
        />
        <Button onPress={addGoalHandlerChildFn} title="Add Goal" />
      </View>
    </>
  );
};

export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: "#cccccc",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#cccccc",
    width: "70%",
    marginRight: 8,
    padding: 8,
  },
});
