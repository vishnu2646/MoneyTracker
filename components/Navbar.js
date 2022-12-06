import { 
    StyleSheet, 
    Text, 
    View, 
    TouchableOpacity, 
    Image 
} from "react-native";
import React, { useState } from "react";
import { BackHandler } from "react-native";
import { useRoute } from '@react-navigation/native';
import { 
    SIZES, 
    COLORS,
    icons 
} from "../constants";

const Navbar = ({ navigation }) => {

    const [showOptions, setShowOptions] = useState(false);
    const route = useRoute();

    const optionsList = [
        {
            title: "Income",
            link: "Income"
        },
        {
            title: "Expense",
            link: "Expense"
        },
        {
            title: "Close",
        },
    ]

    return (
        <>
            <View style={{
                flexDirection: 'row',
                height: 80,
                justifyContent: 'space-between',
                alignItems: 'flex-end',
                paddingHorizontal: SIZES.padding,
                backgroundColor: COLORS.white
            }}>
                <TouchableOpacity 
                    style={{
                        justifyContent: "center",
                        width: 50
                    }}
                    onPress={() => {
                        if(route.name === "Home") {
                            BackHandler.exitApp();
                        } else {
                            navigation.goBack(null);
                        }
                    }}
                >
                    <Image 
                        source={icons.back_arrow}
                        style={{
                            width: 20,
                            height: 20,
                            tintColor: COLORS.primary
                        }}
                    />
                </TouchableOpacity>
                <TouchableOpacity
                    style={{
                        justifyContent: "center",
                        width: 50,
                        alignItems: 'center'
                    }}
                    onPress={() => setShowOptions(!showOptions)}
                >
                    {!showOptions && (
                        <Image 
                            source={icons.more}
                            style={{
                                width: 20,
                                height: 20,
                                tintColor: COLORS.primary
                            }}
                        />
                    )}
                </TouchableOpacity>
            </View>
            {showOptions && (
                <View style={{
                    backgroundColor: COLORS.white,
                    ...styles.shadow,
                    position: 'absolute',
                    zIndex: 1000,
                    right: 30,
                    width: 200,
                    top: 70,
                }}>
                    {optionsList.map((item, index) => {
                        return(
                            <TouchableOpacity
                                key={index}
                                onPress={() => {
                                    if(item.link) {
                                        navigation.navigate(item.title)
                                        setShowOptions(!showOptions)
                                    } else {
                                        setShowOptions(!showOptions)
                                    }
                                }}
                            >
                                <Text 
                                    style={{ 
                                        padding: SIZES.padding, 
                                        backgroundColor: index === optionsList.length -1 ? COLORS.red : null,
                                        color: index === optionsList.length -1 ? COLORS.white : COLORS.black,
                                    }}
                                >
                                    {item.title}
                                </Text>
                            </TouchableOpacity>
                        )
                    })}
                
                </View>
            )}
        </>
    );
};

export default Navbar;

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
