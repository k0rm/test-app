import { View, Text } from 'react-native'
import React from 'react'
import { FlatList } from 'react-native';

import Card from '../Card/Card.jsx';
import styles from './styles.js';

const CardContainer = ({ cards }) => {
    return (
        <View style={{ marginTop: "20%"}}>
            <FlatList
                numColumns={ cards.length }
                data={ cards }
                extraData={ cards }
                renderItem={({ item: { title, image, route, catId } }) => {
                    return (
                        <Card
                            title={title}
                            image={image}
                            route={route}
                            catId={catId}
                        />
                    )
                }}
                keyExtractor={ (cards) => cards.id }
            />
        </View>
    )
}

export default CardContainer;