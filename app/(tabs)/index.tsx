import {
  Image,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  View,
  Text,
} from "react-native";
import React, { useState } from "react";
import { Stack } from "expo-router";
import Colors from "@/constant/Colors";
import { Ionicons } from "@expo/vector-icons";
import { useHeaderHeight } from "@react-navigation/elements";
import { SearchBar } from "react-native-screens";

import CategoriesButton from "@/components/CategoriesButton";
import Listings from "@/components/Listings";
import GroupListings from "@/components/groupListings";
import listingData from "@/data/destinations.json";
import groupData from "@/data/groups.json";
import { ScrollView } from "react-native";
import { GestureHandlerRootView } from 'react-native-gesture-handler';

const Page = () => {
  const headerHeight = useHeaderHeight();
  const [Category, setCategory] = useState("All");

  const onCatChange = (Category: string) => {
    setCategory(Category);
  };
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Stack.Screen
        options={{
          headerTransparent: true,
          headerTitle: "",
          headerLeft: () => (
            <TouchableOpacity onPress={() => {}} style={{ marginLeft: 20 }}>
              <Image
                source={{
                  uri: "https://images.unsplash.com/photo-1531901599143-df5010ab9438?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Example direct image link
                }}
                style={{ width: 40, height: 40, borderRadius: 10 }}
              />
            </TouchableOpacity>
          ),
          headerRight: () => (
            <TouchableOpacity
              onPress={() => {}}
              style={{
                marginRight: 20,
                backgroundColor: Colors.white,
                padding: 10, // Adjusted padding
                borderRadius: 10,
                shadowColor: "#171717",
                shadowOffset: { width: 2, height: 4 },
                shadowOpacity: 0.2,
                shadowRadius: 3,
              }}
            >
              <Ionicons name="notifications" size={20} color={Colors.black} />
            </TouchableOpacity>
          ),
        }}
      />
      <View style={[styles.container, { paddingTop: headerHeight }]}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Text style={styles.headingtext}>Explore The Beautiful World!</Text>
          <View style={styles.searchSection}>
            <View style={styles.searchBar}>
              <Ionicons
                name="search"
                size={18}
                style={{ marginRight: 5, marginTop: 4 }}
                color={Colors.black}
              />
              <TextInput placeholder="Search ......" />
            </View>
            <TouchableOpacity onPress={() => {}} style={styles.filterButton}>
              <Ionicons name="options" size={28} color={Colors.white} />
            </TouchableOpacity>
          </View>
          <CategoriesButton onCategoryChange={onCatChange} />
          <Listings Listing={listingData} Category={Category} />
          <GroupListings Listing={groupData} />
        </ScrollView>
      </View>
      </GestureHandlerRootView>
  );
};

export default Page;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: Colors.bgColor,
  },
  headingtext: {
    fontSize: 20,
    fontWeight: "800",
    color: Colors.black,
    marginTop: 10,
  },
  searchSection: {
    flexDirection: "row",
    marginVertical: 28,
  },
  searchBar: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: Colors.white,
    padding: 16,
    borderRadius: 10,
  },
  filterButton: {
    backgroundColor: Colors.primaryColor,
    padding: 12,
    borderRadius: 10,
    marginLeft: 20,
  },
});
