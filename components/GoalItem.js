import { Pressable, StyleSheet, Text, View } from "react-native";

const GoalItem = ({ text, onDeleteItem, id }) => {
  //One way is to make a new function pass the id prop and use the function the other way is the .bind() method
  const onDeleteItemHandler = () => {
    onDeleteItem(id);
  };

  return (
    <View style={styles.goalItem}>
      <Pressable
        style={({ pressed }) => pressed && styles.pressedItem}
        onPress={onDeleteItemHandler}
        // onPress={onDeleteItem.bind(this, id)}
      >
        <Text style={styles.goalText}>{text}</Text>
      </Pressable>
    </View>
  );
};

export default GoalItem;

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    borderRadius: 6,
    backgroundColor: "#5e0acc",
  },
  pressedItem: {
    opacity: 0.5,
  },
  goalText: {
    padding: 8,
    color: "white",
  },
});
