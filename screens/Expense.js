import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Header, Navbar, CategoryList } from "../components";

const Expense = ({ navigation }) => {
    return (
        <>
            <Navbar 
                navigation={navigation}
            />
            <Header 
                title="Expense"
                description="Summary (private)"
                month="Dec, 2022"
                percentage="18"
                category="Expense"
                times="more"
            />

            <CategoryList />
        </>
    );
};

export default Expense;

const styles = StyleSheet.create({});
