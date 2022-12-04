import { StyleSheet, Text, View, FlatList, Image } from "react-native";
import React from "react";
import { SIZES, COLORS, icons } from "../constants";

const UpcomingData = ({ selectedCategory }) => {

    let allData = selectedCategory ? selectedCategory.expenses : [];
    let upcomingData = allData.filter(a => a.status === 'p');
    
    function renderUpComingExpenseTitle(length) {
        return (
            <View 
                style={{ 
                    padding: SIZES.padding, 
                    backgroundColor: COLORS.lightGray2 
                }}
            >
                <Text 
                    style={{
                        color: COLORS.primary,
                        fontSize: 16,
                        lineHeight: 22
                    }}
                >
                    UPCOMING EXPENSE {selectedCategory?.name ? <Text style={{ fontWeight: '900' }}>: {selectedCategory?.name}</Text> : ""}
                </Text>
                <Text 
                    style={{
                        color: COLORS.darkgray,
                        fontSize: 14,
                        lineHeight: 22
                    }}
                >
                    {length} Total
                </Text>
            </View>
        )
    }
    

    const renderItem = ({item, index}) => {
        return (
            <View style={{
                width: 300,
                marginRight: SIZES.padding,
                marginLeft: index === 0 ? SIZES.padding : 0,
                marginVertical: SIZES.radius,
                borderRadius: SIZES.radius,
                backgroundColor: COLORS.white,
                ...styles.shadow 
            }}>
                <View 
                    style={{ 
                        flexDirection: "row", 
                        padding: SIZES.padding, 
                        alignItems: 'center' 
                    }}
                >
                    <View 
                        style={{
                            height: 50,
                            width: 50,
                            borderRadius: 25,
                            backgroundColor: COLORS.lightGray,
                            alignItems: "center",
                            justifyContent: "center",
                            marginRight: SIZES.base
                        }}
                    >
                        <Image 
                            source={selectedCategory.icon}
                            style={{
                                width: 30,
                                height: 30,
                                tintColor: selectedCategory.color
                            }}
                        />
                    </View>
                    <Text 
                        style={{ 
                            color: selectedCategory.color 
                        }}
                    >
                        {selectedCategory.name}
                    </Text>
                </View>
                {/* description */}
                <View style={{ paddingHorizontal: SIZES.padding }}>
                    <Text
                        style={{
                            fontSize: 22,
                            lineHeight: 36,
                        }}
                    >{item.title}</Text>
                    <Text 
                        style={{
                            flexWrap: 'wrap',
                            color: COLORS.darkgray,
                            fontSize: 16,
                            lineHeight: 22
                        }}
                    >
                        {item.description}
                    </Text>

                    <Text 
                        style={{ 
                            marginTop: SIZES.padding, 
                            fontSize: 14, 
                            lineHeight: 22 
                        }}
                    >
                        Location
                    </Text>
                    <View style={{ flexDirection: "row" }}>
                        <Image 
                            source={icons.pin}
                            style={{
                                width: 20,
                                height: 20,
                                tintColor: COLORS.darkgray,
                                marginRight: 5
                            }}
                        />
                        <Text 
                            style={{ 
                                marginBottom: SIZES.base, 
                                color: COLORS.darkgray, 
                                fontSize: 14, 
                                lineHeight: 22 
                            }}
                        >
                            {item.location}
                        </Text>
                    </View>
                </View>
                <View
                    style={{
                        height: 50,
                        alignItems: 'center',
                        justifyContent: 'center',
                        backgroundColor: selectedCategory.color,
                        borderBottomRightRadius: SIZES.radius,
                        borderBottomLeftRadius: SIZES.radius,
                    }}
                >
                    <Text style={{ color: COLORS.white, fontSize: 16, lineHeight: 22 }}>CONFIRM {item.total.toFixed(2)} INR</Text>
                </View>
            </View>
        )
    }

    return (
        <View>
            {renderUpComingExpenseTitle(upcomingData.length)}
            {upcomingData.length > 0 ? (
                <FlatList 
                    data={upcomingData}
                    renderItem={renderItem}
                    keyExtractor={item => `${item.id}`}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                />
            ) : (
                <View 
                    style={{
                        alignItems: "center",
                        justifyContent: "center",
                        height: 300
                    }}
                >
                    <Text style={{ color: COLORS.primary, fontSize: 16, lineHeight: 22 }}>No Records Found</Text>
                </View>
            )}
        </View>
    )
};

export default UpcomingData;

const styles = StyleSheet.create({});
