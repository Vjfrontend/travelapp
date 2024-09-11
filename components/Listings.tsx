import {
  View,
  Text,
  FlatList,
  ListRenderItem,
  Image,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useState } from "react";
import { listingTypes } from "@/types/listingTypes";
import Colors from "@/constant/Colors";
import { FontAwesome5, Ionicons } from "@expo/vector-icons";

import { Link } from "expo-router";


type props = {
  Listing: any[];
  Category:string;
};

const Listings = ({ Listing,Category }: props) => {
  const [loading,setLoading] = useState(false)

  useEffect (()=>{
    console.log("update listings")
    setLoading(true);
    setTimeout(()=>{
      setLoading(false)
    },200)
  },[Category]);
  const renderItems: ListRenderItem<listingTypes> = ({ item }) => {
    return (
      <Link href={`/listing/${item.id}`} asChild>
      <TouchableOpacity>
        <View style={styles.item}>
          <Image source={{ uri: item.image }} style={styles.Image} />

          <View style={styles.bookmark}>
            <Ionicons name="bookmark-outline" size={20} color={Colors.white} />
          </View>
          <Text style={styles.itemtxt} numberOfLines={1} ellipsizeMode="tail">
            {item.name}
          </Text>
          <View style={{flexDirection:"row",justifyContent:"space-between"}}>
            <View style={{flexDirection:"row",alignItems:"center"}}>
              <FontAwesome5
                name="map-marker-alt"
                size={18}
                color={Colors.primaryColor}
              />
              <Text style={styles.itemLocationtxt}>{item.location}</Text>
            </View>
            <Text style={styles.price}>${item.price}</Text>
          </View>
        </View>
      </TouchableOpacity>
      </Link>
    );
  };
  return (
    <View>
      <FlatList
        data={ loading?[]:Listing}
        renderItem={renderItems}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default Listings;
const styles = StyleSheet.create({
  item: {
    backgroundColor: Colors.white,
    padding: 10,
    borderRadius: 10,
    marginRight: 20,
    width: 220,
  },
  Image: {
    width: 200,
    height: 200,
    borderRadius: 10,
    marginBottom: 30,
  },
  bookmark: {
    position: "absolute",
    top: 185,
    right: 30,
    backgroundColor: Colors.primaryColor,
    padding: 10,
    borderRadius: 30,
    borderWidth: 2,
    borderColor: Colors.white,
  },
  itemtxt: {
    fontSize: 16,
    fontWeight: "600",
    color: Colors.black,
    marginBottom: 10,
  },
  itemLocationtxt:{
    fontSize:12,
    marginLeft:5
  },
  price:{
    fontSize:12,
    fontWeight:"600",
    color:Colors.primaryColor
  }
});
