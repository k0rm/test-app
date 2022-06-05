import { View, Text, Image, FlatList } from 'react-native'
import React from 'react'
import styles from './styles.js';

import HC from '../HC/HC.jsx';

const HomeCard = ({ data }) => {
    return (
        <View style={{ flex: 1 }}>
            <FlatList
                numColumns={data.length}
                data={data}
                extraData={data}
                renderItem={({ item: { title, image, description } }) => {
                    return (
                      <HC
                        title={title}
                        image={image}
                        description={description}
                      />
                    )
                }}
                keyExtractor={(data) => data.id}
            />
        </View>
    )
}

export default HomeCard;