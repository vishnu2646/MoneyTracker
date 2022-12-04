import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Header, Navbar } from "../components";

const Income = ({navigation}) => {
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
        </>
    );
};

export default Income;

const styles = StyleSheet.create({});
