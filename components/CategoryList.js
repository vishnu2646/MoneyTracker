import { StyleSheet, Text, View, Animated, TouchableOpacity, FlatList, Image } from "react-native";
import React, { useRef, useState } from "react";
import { SIZES, COLORS, icons } from "../constants";

const CategoryList = ({ data, setSelectedCategory }) => {

    const categoryListHeightAnimationValue = useRef(new Animated.Value(115)).current;
    const [showToggle, setShowToggle] = useState(false);

    const renderItem = ({item}) => {
        return(
            <TouchableOpacity
                onPress={() => {
                    setSelectedCategory(item)
                }}
                style={{
                    flex: 1,
                    flexDirection: 'row',
                    margin: 5,
                    paddingVertical: SIZES.radius,
                    paddingHorizontal: SIZES.padding,
                    borderRadius: 5,
                    backgroundColor: COLORS.white,
                    ...styles.shadow
                }}
            >
                <Image 
                    source={item?.icon}
                    style={{
                        width: 20,
                        height: 20,
                        tintColor: item?.color
                    }}
                />
                <Text style={{ 
                    marginLeft: SIZES.base, 
                    color: COLORS.primary, 
                    fontSize: 14, 
                    lineHeight: 22
                }}>
                    {item?.name}
                </Text>
            </TouchableOpacity>
        )
    }

    return (
        <View style={{ paddingHorizontal: SIZES.padding - 5 }}>
            <Animated.View style={{ height: categoryListHeightAnimationValue }}>
                <FlatList 
                    data={data}
                    renderItem={renderItem}
                    keyExtractor={item => `${item.id}`}
                    numColumns={2}
                />
            </Animated.View>

            <TouchableOpacity
                style={{
                    flexDirection: 'row',
                    marginVertical: SIZES.base,
                    justifyContent: 'center'
                }}
                onPress={() => {
                    if(showToggle) {
                        Animated.timing(categoryListHeightAnimationValue, {
                            toValue: 115,
                            duration: 300,
                            useNativeDriver: false
                        }).start()
                    } else {
                        Animated.timing(categoryListHeightAnimationValue, {
                            toValue: 172.5,
                            duration: 300,
                            useNativeDriver: false
                        }).start()
                    }
                    setShowToggle(!showToggle)
                }}
            >
                <Text style={{ fontSize: 14, lineHeight: 22 }}>Show {showToggle ? "Less": "More"}</Text>
                <Image 
                    source={showToggle ? icons.up_arrow : icons.down_arrow}
                    style={{
                        marginLeft: 5,
                        width: 15,
                        height: 15,
                        alignSelf: 'center'
                    }}
                />
            </TouchableOpacity>
        </View>
    )
};

export default CategoryList;

const styles = StyleSheet.create({
    shadow: {
        shadowColor: "#000",
        shadowOffset: {
            width: 2,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 3,
    }
});
