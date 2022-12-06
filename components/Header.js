import { 
    StyleSheet, 
    Text, 
    View, 
    Image 
} from "react-native";
import React from "react";
import { 
    SIZES, 
    COLORS, 
    icons 
} from "../constants";

const Header = ({ title, description, month, percentage, category, content, times }) => {
    return (
        <View style={{
            padding: SIZES.padding,
            backgroundColor: COLORS.white
        }}>
            <View>
                <Text style={{ color: COLORS.primary, fontSize: 22, lineHeight: 30, textTransform: "capitalize" }}>{title}</Text>
                <Text style={{ color: COLORS.darkgray, fontSize: 16, lineHeight: 22 }}>{description}</Text>
            </View>

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
                    <Text style={{ color: COLORS.primary, fontSize: 16, lineHeight: 22 }}>{month}</Text>
                    
                    <Text style={{ color: COLORS.darkgray, fontSize: 16, lineHeight: 22 }}>{(percentage) ? `${category} is ${percentage} ${times} than last Month` : content}</Text>
                </View>
            </View>
        </View>
    );
};

export default Header;

const styles = StyleSheet.create({});
