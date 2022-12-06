import { 
    StyleSheet, 
    Text, 
    View, 
    FlatList, 
    ScrollView, 
    Image, 
    TouchableOpacity 
} from "react-native";
import React, { useState } from "react";
import { 
    Header, 
    Navbar 
} from "../components";
import { incomeData } from "../data/data";
import { 
    COLORS, 
    SIZES, 
    icons 
} from "../constants";

const Income = ({navigation}) => {

    const [data, setData] = useState(incomeData);
    let totalAmount = 0;

    data.forEach((item) => {
        totalAmount = totalAmount + item.total; 
    });

    function renderItem({item}) {
        return (
            <TouchableOpacity
                onPress={() => {
                    navigation.navigate("Detail", {
                        item: item,
                        type: "Income"
                    })
                }}

                style={{ 
                    paddingHorizontal: SIZES.padding, 
                    flexDirection: "row", 
                    alignItems: "center", 
                    justifyContent: "space-between" 
                }}
            >
                <View style={{
                    flexDirection: 'row',
                    marginTop: SIZES.padding,
                    alignItems: 'center'
                }}>
                    <View style={{
                        height: 50,
                        width: 50,
                        backgroundColor: COLORS.lightGray,
                        borderRadius: 25,
                        justifyContent: "center",
                        alignItems: 'center'
                    }}>
                        <Image 
                            source={icons.calendar}
                            style={{
                                width: 20,
                                height: 20,
                                tintColor: COLORS.lightBlue
                            }}
                        />
                    </View>
                    <View style={{ marginLeft: SIZES.padding }}>
                        <Text style={{ color: COLORS.primary, fontSize: 16, lineHeight: 22 }}>{item.title}</Text>
                        
                        <Text style={{ color: COLORS.darkgray, fontSize: 14, lineHeight: 22 }}>{item.description}</Text>
                    </View>
                </View>
                <Text style={{ fontSize: 16, fontWeight: "500" }}>{item.total}</Text>
            </TouchableOpacity>
        )
    }

    return (
        <>
            <Navbar 
                navigation={navigation}
            />
            <Header 
                title="Income"
                description="Summary (private)"
                month="Dec, 2022"
                percentage="10"
                category="Income"
                times="less"
            />
            <ScrollView 
                contentContainerStyle={{ paddingBottom: 50 }}
            >
                <View style={{ 
                    paddingHorizontal: SIZES.padding, 
                    marginTop: SIZES.padding,
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: 'space-between'
                }}>
                    <Text 
                        style={{ 
                            color: COLORS.primary, 
                            fontWeight:"400", 
                            fontSize: 22 
                        }}
                    >
                        Income List
                    </Text>
                    <Text 
                        style={{ 
                            color: COLORS.primary, 
                            fontWeight:"400", 
                            fontSize: 16 
                        }}
                    >
                        Total <Text style={{ fontWeight: "bold", color: COLORS.darkgray }}>{totalAmount}</Text>
                    </Text>
                </View>

                <FlatList 
                    data={data}
                    renderItem={renderItem}
                    keyExtractor={item => `${item.id}`}
                />

            </ScrollView>
        </>
    );
};

export default Income;

const styles = StyleSheet.create({});
