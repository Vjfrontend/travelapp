import { ListRenderItem, StyleSheet,Image , Text, View } from 'react-native'
import React from 'react'
import { GroupType } from '@/types/groupType'
import { FlatList } from 'react-native-gesture-handler'
import Colors from '@/constant/Colors'
import { Ionicons } from '@expo/vector-icons'

const GroupListings = ({Listing}:{Listing:GroupType[]}) => {
    const renderItem:ListRenderItem<GroupType> = ({item})=>{
return(
    <View style={styles.item}>
        <Image source={{uri:item.image}} style={styles.img} />
        <View>
            <Text style={styles.name}>{item.name}</Text>
            <View style={{flexDirection:"row",alignItems:"center"}}>
                <Ionicons name="star" size={20} color={Colors.primaryColor}/>
                <Text style={styles.rating}>{item.rating}</Text>
                <Text style={styles.reviews}>{item.reviews}</Text>
            </View>
        </View>
    </View>
)
    }
  return (
    <View style={{marginVertical:20}}>
      <Text style={styles.txt}>Top Travel Groups </Text>
      <FlatList data={Listing} renderItem={renderItem} horizontal showsHorizontalScrollIndicator={false}/>
    </View>
  )
}

export default GroupListings

const styles = StyleSheet.create({
    img:{
        width:80,
        height:100,
        borderRadius:10,
        marginRight:10,
    },
    item:{
        backgroundColor:Colors.white,
        marginRight:20,
        padding:10,
        borderRadius:10,
        flexDirection:"row",
        alignItems:"center"
    },
    txt:{fontSize:22,
        fontWeight:"600",
        color:Colors.black,
        marginBottom:10,


    },
    name:{
        fontSize:14,
        color:Colors.black,
        alignItems:"center"

    },
    rating:{
        fontSize :14,
        fontWeight:"600",
        color:Colors.black,
        marginLeft:5,
    },
    reviews:{
        fontSize :14,
        fontWeight:"600",
        color:"#999",
        marginLeft:5,
    }
})