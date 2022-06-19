import { View, Text, Image, FlatList } from 'react-native'
import React from 'react'
import styles from './styles.js';
import { ScrollView } from 'react-native';

import HC from '../HC/HC.jsx';

const HomeCard = ({ data }) => {
    console.log(data);
    return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center", marginTop: "7.5%" }}>
            <FlatList
                numColumns={data.length}
                style={{ padding: 10}}
                data={data}
                extraData={data}
                scrollEnabled={true}
                renderItem={({ item: { title, image, description } }) => {
                    return (
                      <HC
                        title={title}
                        image={image}
                        description={description}
                      />
                    )
                }}
                keyExtractor={data => data.id}
            />
        </View>
    )
}

export default HomeCard;