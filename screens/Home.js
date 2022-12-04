import {
    View,
    ScrollView,
} from "react-native";
import React, { useState } from "react";
import {
    COLORS
} from "../constants";
import {
    Navbar,
    Header,
    CategoryList,
    Tabs,
    UpcomingData
} from "../components";
import { categoriesData } from "../data/data";

const Home = ({navigation}) => {

    const [viewMode, setViewMode] = useState('list');
    const [categories, setCategories] = useState(categoriesData);
    const [selectedCategory, setSelectedCategory] = useState(null);

    return (
        <View style={{ flex: 1, backgroundColor: COLORS.lightGray2 }}>

            {/* navbar */}
            <Navbar
                navigation={navigation}
            />

            {/* header section */}
            <Header
                title="Home"
                description="Summary (private)"
                month="Dec, 2022"
                content="Welcome to Income/Expense Tracker"
            />

            {/* Tab Section */}
            <Tabs
                viewMode={viewMode}
                setViewMode={setViewMode}
                length={categoriesData.length}
            />

            <ScrollView contentContainerStyle={{ paddingBottom: 60 }}>
                {
                    viewMode === 'list' && (
                        <View>
                            <CategoryList
                                data={categories}
                                setSelectedCategory={setSelectedCategory}
                            />
                            <UpcomingData
                                selectedCategory={selectedCategory}
                            />
                        </View>
                    )
                }
            </ScrollView>
        </View>
    );
};

export default Home;