import {
  Button,
  TextInput,
  View,
  StyleSheet,
  Modal,
  Image,
} from "react-native";
import { useState } from "react";

const GoalInput = ({ addGoalHandlerParentFn, visble, onCancel }) => {
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
    <Modal testID="test-modal" visible={visble} animationType="slide">
      <View style={styles.inputContainer}>
        <Image
          source={require("../assets/images/goal.png")}
          style={styles.image}
        />
        <TextInput
          onChangeText={goalInputHandler}
          style={styles.textInput}
          placeholder="Your course goal!"
          value={enteredGoalText}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button onPress={onCancel} title="Cancel " color="#f31282" />
          </View>
          <View style={styles.button}>
            <Button
              onPress={addGoalHandlerChildFn}
              title="Add Goal"
              color="#b189f0"
            />
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    backgroundColor: "#311b6b",
  },
  image: {
    width: 100,
    height: 100,
    margin: 20,
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#e4d0ff",
    backgroundColor: "#e4d0ff",
    color: "#120438",
    borderRadius: 6,
    width: "100%",
    padding: 16,
  },
  buttonContainer: {
    flexDirection: "row",
    marginTop: 16,
    // justifyContent: "space-between",
  },
  button: {
    width: 100,
    marginHorizontal: 8,
  },
});
