import styles from "./RoutinesList.style.js";
import React, { useMemo, useState } from "react";
import { SearchInput } from "../../components/index.js";
import { FlatList, Text, TouchableOpacity, View } from "react-native";

const RoutinesList = ({
  navigation,
  routines = [],
  defRoutines,
  showSearch = true,
}) => {
  const [keyword, setkeyword] = useState("");
  const sourceData = routines.length ? routines : defRoutines;

  const filteredRoutines = useMemo(() => {
    if (sourceData) {
      return Object.values(sourceData).filter((routine) => {
        const lowerCaseTitle = routine.routineName.toLowerCase();
        return lowerCaseTitle.includes(keyword.toLowerCase());
      });
    }
    return [];
  }, [sourceData, keyword]);

  return (
    <View style={styles.container}>
      {showSearch && <SearchInput onSearch={setkeyword} />}
      <View style={styles.listContainer}>
        <FlatList
          data={filteredRoutines}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.squareItem}
              onPress={() =>
                navigation.navigate("Details", {
                  routine: item,
                })
              }
            >
              <Text style={styles.textItem}>{item.routineName}</Text>
              <View style={styles.exercisesContainer}>
                {item.exercises.map((exercise, index) => (
                  <Text
                    key={index}
                    style={styles.exerciseText}
                    numberOfLines={1}
                    ellipsizeMode="tail"
                  >
                    • {exercise.name}
                  </Text>
                ))}
              </View>
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item.id.toString()}
          numColumns={2}
        />
      </View>
    </View>
  );
};

export default RoutinesList;
