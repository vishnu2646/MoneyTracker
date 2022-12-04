import { Dimensions } from "react-native";
const { width, height } = Dimensions.get("window");

const RobotoRegular = require('../assets/fonts/Roboto-Regular.ttf');
const RobotoBold = require('../assets/fonts/Roboto-Bold.ttf');
const RobotoBlack = require('../assets/fonts/Roboto-Black.ttf');

export const COLORS = {
    primary: "#194868",
    secondary: "#FF615F",
    black: "#1E1F20",
    white: "#FFFFFF",
    lightGray: "#F5F7F9",
    lightGray2: '#FAFBFD',
    gray: "#BEC1D2",
    blue: '#42B0FF',
    darkgray: '#898C95',
    yellow: '#FFD573',
    lightBlue: '#95A9B8',
    darkgreen: '#008159',
    peach: '#FF615F',
    purple: '#8e44ad',
    red: '#FF0000',
};

export const SIZES = {
    base: 8,
    font: 14,
    radius: 12,
    padding: 24,
    padding2: 36,

    largeTitle: 50,
    h1: 30,
    h2: 22,
    h3: 16,
    h4: 14,

    body1: 30,
    body2: 20,
    body3: 16,
    body4: 14,

    width,
    height
};

export const FONTS = {
    largeTitle: { fontFamily: RobotoRegular, fontSize: SIZES.largeTitle, lineHeight: 55 },
    h1: { fontFamily: RobotoBlack, fontSize: SIZES.h1, lineHeight: 36 },
    h2: { fontFamily: "Roboto-Bold", fontSize: SIZES.h2, lineHeight: 30 },
    h3: { fontFamily: RobotoBold, fontSize: SIZES.h3, lineHeight: 22 },
    h4: { fontFamily: RobotoBold, fontSize: SIZES.h4, lineHeight: 22 },
    body1: { fontFamily: RobotoRegular, fontSize: SIZES.body1, lineHeight: 36 },
    body2: { fontFamily: RobotoRegular, fontSize: SIZES.body2, lineHeight: 30 },
    body3: { fontFamily: RobotoRegular, fontSize: SIZES.body3, lineHeight: 22 },
    body4: { fontFamily: RobotoRegular, fontSize: SIZES.body4, lineHeight: 22 },
};

const appTheme = { COLORS, SIZES, FONTS };

export default appTheme;