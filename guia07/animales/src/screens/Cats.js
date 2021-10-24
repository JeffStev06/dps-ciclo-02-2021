import React from "react";
import { View, FlatList } from "react-native";

import cats from "../utils/cats";
import Card from "../components/Card";

export default function Cats() {
  return (
    <View>
      <FlatList 
        style={{paddingVertical: 10}}
        data={cats}
        renderItem={({item}) => (
          <Card 
            name={item.name}
            src={item.source}
            origin={item.origin}
            description={item.description}
          />
        )}
        keyExtractor={cat => cat.id}
      />
    </View>
  );
}
