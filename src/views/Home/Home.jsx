import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'

import dataJson from '../../resources/data.json'
import { db } from '../../../firebase.js';
import { ref, onValue } from 'firebase/database';

import HomeCard from '../../components/HomeCard/HomeCard'
import { ScrollView } from 'react-native'

const Home = () => {
    // let data = dataJson.Categories
    let [data, setData] = useState([]);

    useEffect(() => {
        const newData = ref(db, "Categories");
        onValue(newData, (snapshot) => {
            const dt = snapshot.val();
            setData(dt);
        });
    }, []);


    return (
        <ScrollView horizontal={true} style={{ flex: 1, backgroundColor: "#212529", opacity: 0.9 }}>
            {data.length > 5
            ?
            <HomeCard 
                data={data}
            />
            :
            <View>
                <Text>Hello</Text>
            </View>
            }
        </ScrollView>
    )
}

export default Home;