import { 
    StyleSheet, 
    Text, 
    View, 
    TouchableOpacity, 
    Image 
} from "react-native";
import { Dimensions } from 'react-native';
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
    let windowWidth = Dimensions.get('window').width;
    const route = useRoute();

    const optionsList = [
        {
            icon: icons.income,
            title: "Income List",
            link: "Income"
        },
        {
            icon: icons.expense,
            title: "Expense List",
            link: "Expense"
        }
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
                    <Image 
                        source={icons.more}
                        style={{
                            width: 20,
                            height: 20,
                            tintColor: COLORS.primary
                        }}
                    />
                </TouchableOpacity>
            </View>
            {showOptions && (
                <View style={{
                    backgroundColor: COLORS.white,
                    ...styles.shadow,
                    position: 'absolute',
                    zIndex: 100,
                    left: 0,
                    top: 0,
                    width: windowWidth / 1.5,
                    height: '100%',
                    paddingVertical: SIZES.padding,
                }}>
                    <TouchableOpacity
                        onPress={() => setShowOptions(!showOptions)} 
                        style={{ 
                            marginTop: 40, 
                            position: 'absolute', 
                            right: 0, 
                            paddingHorizontal: SIZES.padding 
                        }}
                    >
                        <Text 
                            style={{ fontSize: 20 }}
                        >
                            X
                        </Text>
                    </TouchableOpacity>
                    <View style={{ marginTop: 40, paddingHorizontal: SIZES.padding }}>
                        {optionsList.map((item, index) => {
                            return(
                                <TouchableOpacity
                                    key={index}
                                    onPress={() => {
                                        if(item.link) {
                                            navigation.navigate(item.link)
                                            setShowOptions(!showOptions)
                                        } else {
                                            setShowOptions(!showOptions)
                                        }
                                    }}
                                >
                                    <View style={{ flexDirection: 'row', alignItems: "center" }}>
                                        <Image 
                                            source={item.icon}
                                            style={{
                                                width: 25,
                                                height: 25
                                            }}
                                        />
                                        <Text 
                                            style={{ 
                                                padding: 20,
                                                color: COLORS.peach,
                                                fontSize: 18
                                            }}
                                        >
                                            {item.title}
                                        </Text>
                                    </View>
                                </TouchableOpacity>
                            )
                        })}
                    </View>
                </View>
            )}
            {showOptions && (
                <TouchableOpacity
                    onPress={() => setShowOptions(!showOptions)}
                    style={{
                        position: 'absolute',
                        zIndex: 1,
                        width: windowWidth,
                        height: Dimensions.get('window').height,
                        backgroundColor: COLORS.lightBlack
                    }}
                />
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
    },
});
