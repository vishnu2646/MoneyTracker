import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { Navbar, Header } from "../components";
import { COLORS, icons } from "../constants";

const Detail = ({route, navigation}) => {

    const { item, type } = route.params;

    return (
        <View>
            <Navbar 
                navigation={navigation}
            />
            <Header
                title={`${type} Detail`}
                description="Summary (private)"
                month="Dec, 2022"
                content={`Summary for selected ${type}`}
            />

            <View 
                style={{
                    backgroundColor: COLORS.white,
                    margin: 30,
                    padding: 30,
                }}
            >
                <View 
                    style={{ 
                        alignItems: 'center',
                    }}
                >
                    <Text 
                        style={{ 
                            fontSize: 22, 
                            color: COLORS.primary,
                            fontWeight: '200'
                        }}
                    >
                        {item.title}
                    </Text>
                </View>
                <View style={{
                    marginTop: 10
                }}>
                    <Text 
                        style={{
                            lineHeight: 30,
                            fontSize: 18,
                            color: COLORS.darkgray
                        }}
                    >Hi, Vishnupriyan, this {type} has been credited on 22nd Dec, 2022 for 
                    <Text>{item.description} </Text> 
                    with the amount of 
                    <Text style={{
                        color: COLORS.peach
                    }}> {item.total}</Text>.</Text>
                </View>
                <View
                    style={{
                        alignItems: "center"
                    }}
                >
                    <Image 
                        source={type === "Income" ? icons.income : icons.expense}
                        style={{
                            width: 200,
                            height: 200
                        }}
                    />
                    <Text style={{ fontSize: 20, color: COLORS.primary }}>{type}</Text>
                </View>
            </View>
        </View>
    );
};

export default Detail;

const styles = StyleSheet.create({});
