import { View, Text } from 'react-native'
import React from 'react'
import { Image } from 'react-native';
import styles from './styles';

const MatchCards = ({ card }) => {
    return (
        <View style={ styles.container }>
            <Image
                source={{ uri: card }}
                style={ styles.cardImage }
            />
        </View>
    )
}

export default MatchCards;