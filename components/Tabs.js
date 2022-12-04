import { Text, View, TouchableOpacity, Image } from "react-native";
import React from "react";
import { icons, COLORS, SIZES } from "../constants";

const Tabs = ({ viewMode, setViewMode, length }) => {

    return(
        <View style={{ flexDirection: 'row', padding: SIZES.padding, justifyContent: 'space-between', alignItems: 'center' }}>
            {/* Title */}
            <View>
                <Text style={{ color: COLORS.primary, fontSize: 16, lineHeight: 22 }}>CATEGORIES</Text>
                <Text style={{ color: COLORS.darkgray, fontSize: 14, lineHeight: 22 }}>{length} Total</Text>
            </View>
            {/* Buttons */}
            <View style={{ flexDirection: 'row' }}>
                <TouchableOpacity
                    style={{
                        alignItems: "center",
                        justifyContent: "center",
                        height: 50,
                        width: 50,
                        backgroundColor: viewMode === 'chart' ? COLORS.secondary : null,
                        borderRadius: 25
                    }}
                    onPress={() => setViewMode('chart')}
                >
                    <Image 
                        source={icons.chart}
                        resizeMode="contain"
                        style={{
                            width: 20,
                            height: 20,
                            tintColor: viewMode === 'chart' ? COLORS.white : COLORS.darkgray
                        }}
                    />
                </TouchableOpacity>
                <TouchableOpacity
                    style={{
                        alignItems: "center",
                        justifyContent: "center",
                        height: 50,
                        width: 50,
                        backgroundColor: viewMode === 'list' ? COLORS.secondary : null,
                        borderRadius: 25
                    }}
                    onPress={() => setViewMode('list')}
                >
                    <Image 
                        source={icons.menu}
                        resizeMode="contain"
                        style={{
                            width: 20,
                            height: 20,
                            tintColor: viewMode === 'list' ? COLORS.white : COLORS.darkgray
                        }}
                    />
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default Tabs;