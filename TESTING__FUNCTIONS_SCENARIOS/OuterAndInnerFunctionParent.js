import React, { useEffect, useState } from "react";
import { Text, View } from "react-native";
import OuterInnerFunctionChild from "./OuterInnerFunctionChild";

const OuterAndInnerFunctionParent = () => {
  const [items, setItems] = useState(["Apple", "Banana", "Cherry", "Date"]);
  const [filteredItems, setFilteredItems] = useState([...items]);

  useEffect(() => {
    applyFilter(items);
  }, []);
  const applyFilter = (array) => {
    //Inner function
    const filterLogic = () => {
      return array.push("fuck you");
    };

    const filtered = filterLogic();
    setFilteredItems(filtered);
  };

  const functionFromTheParentComponent = (object) => {
    console.log("LOG FROM PARENT FN");
    console.log(object.lastName);
  };

  return (
    <>
      <View>
        <Text>Parent</Text>
        <OuterInnerFunctionChild
          fnFromParent={functionFromTheParentComponent}
        />
      </View>
    </>
  );
};

export default OuterAndInnerFunctionParent;
