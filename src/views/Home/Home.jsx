import { View, Text } from 'react-native'
import React from 'react'

import dataJson from '../../resources/data.json'
import { useState } from 'react'

import HomeCard from '../../components/HomeCard/HomeCard'

const Home = () => {
    let data = dataJson.Categories


    return (
        <View style={{ flex: 1, backgroundColor: "#edede9" }}>
            <HomeCard 
                data={data}
            />
        </View>
    )
}

export default Home;