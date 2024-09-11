import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import React, { useRef, useState } from "react";
import destinationCategories from "@/data/categories";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Colors from "@/constant/Colors";
type props = {
  onCategoryChange:( Category:string) => void
}

const CategoriesButton = ({onCategoryChange}:props) => {
  const itemRef = useRef<TouchableOpacity[] | null[]>([]);

  const scrollRef = useRef<ScrollView>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleSelectCategory = (index: number) => {
    const selected = itemRef.current[index];
    setActiveIndex(index);
    selected?.measure((x)=>{
scrollRef.current?.scrollTo({x:x, y:0, animated:true});
    });
    onCategoryChange(destinationCategories[index].title);
  };
  return (
    <View>
      <Text style={styles.title}>Categories</Text>
      <ScrollView
        ref={scrollRef}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          gap: 20,
          paddingVertical: 10,
          marginBottom: 10,
        }}
      >
        {destinationCategories.map((item, index) => (
          <TouchableOpacity
            key={index}
            ref={(el) => (itemRef.current[index] = el)}
            onPress={() => handleSelectCategory(index)}
            style={
              activeIndex === index
                ? styles.CategoriesBtnActive
                : styles.CategoriesBtn
            }
          >
            <MaterialCommunityIcons
              name={item.iconName as any}
              size={20}
              color={activeIndex === index ? Colors.white : Colors.black}
            />
            <Text
              style={
                activeIndex === index
                  ? styles.activetxt
                  : styles.CategoriesBtntxt
              }
            >
              {item.title}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

export default CategoriesButton;
const styles = StyleSheet.create({
  title: {
    fontSize: 22,
    fontWeight: "700",
  },
  CategoriesBtn: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: Colors.white,
    paddingHorizontal: 16,
    paddingVertical: 10,
    shadowColor: "#333333",
    borderRadius: 10,
    shadowOffset: { width: 1, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
  },
  CategoriesBtntxt: {
    marginLeft: 5,
    color: Colors.black,
  },
  CategoriesBtnActive: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: Colors.primaryColor,
    paddingHorizontal: 16,
    paddingVertical: 10,
    shadowColor: "#333333",
    borderRadius: 10,
    shadowOffset: { width: 1, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
  },
  activetxt: {
    marginLeft: 5,
    color: Colors.white,
  },
});
