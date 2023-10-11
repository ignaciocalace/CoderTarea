import { FlatList, Text, TouchableOpacity, View } from "react-native";
import React, { useMemo, useState } from "react";
import styles from "./RoutinesList.style.js";
import { SearchInput } from "../../components/index.js";
import { useGetWorkoutsCategoryQuery } from "../../services/workoutsApi.js";

const RoutinesList = ({
  navigation,
  route,
  routines = [],
  showSearch = true,
}) => {
  const [keyword, setkeyword] = useState("");
  const { data, isLoading } = useGetWorkoutsCategoryQuery(
    route.params?.category
  );
  const sourceData = routines.length ? routines : data;

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
        {isLoading ? (
          <Text>Loading...</Text>
        ) : (
          <FlatList
            data={filteredRoutines}
            renderItem={({ item }) => (
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate("Details", { routine: item })
                }
              >
                <Text style={styles.textItem}>{item.routineName}</Text>
                <View style={styles.underline} />
              </TouchableOpacity>
            )}
            keyExtractor={(item) => item.id.toString()}
          />
        )}
      </View>
    </View>
  );
};

export default RoutinesList;
