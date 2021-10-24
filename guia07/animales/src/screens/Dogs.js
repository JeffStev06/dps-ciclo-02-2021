import React from "react";
import { View, FlatList } from "react-native";

import dogs from "../utils/dogs";
import Card from "../components/Card";

export default function Dogs() {
  return (
    <View>
      <FlatList 
        style={{paddingVertical: 10}}
        data={dogs}
        renderItem={({item}) => (
          <Card 
            name={item.name}
            src={item.source}
            origin={item.origin}
            description={item.description}
          />
        )}
        keyExtractor={dog => dog.id}
      />
    </View>
  );
}
