import CategoryButton from "@/components/category-button";
import Header from "@/components/header";
import { FlatList, View } from "react-native";

import { CATEGORIES } from "@/utils/data/products";
import { useState } from "react";

export default function App() {
  const [category, setCategory] = useState(CATEGORIES[0]);

  function handleCategorySelect(selectedCategory: string) {
    setCategory(selectedCategory);
  }

  return (
    <View className="flex-1 pt-8">
      <Header title="Faça seu pedido" cartQuantityItems={2} />

      <FlatList
        data={CATEGORIES}
        keyExtractor={(item) => item}
        horizontal
        className="max-h-10 mt-5"
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ gap: 12, paddingHorizontal: 20 }}
        renderItem={({ item }) => (
          <CategoryButton
            title={item}
            onPress={() => handleCategorySelect(item)}
            isSelected={category === item}
          />
        )}
      />
    </View>
  );
}
