import { View, Text } from 'react-native'
import React from 'react'

import dataJson from '../../resources/data.json'
import { useState } from 'react'

import HomeCard from '../../components/HomeCard/HomeCard'
import { ScrollView } from 'react-native'

const Home = () => {
    let data = dataJson.Categories


    return (
        <ScrollView horizontal={true} style={{ flex: 1, backgroundColor: "#212529", opacity: 0.9 }}>
            <HomeCard 
                data={data}
            />
        </ScrollView>
    )
}

export default Home;