import { View, Text } from 'react-native'
import React, { useState } from 'react'
import styles from './styles';
import { ImageBackground } from 'react-native';
import { TouchableOpacity } from 'react-native';

const MatchCards = ({ image, id, aId, matched, flipped, flipCard }) => {

    return (
        !flipped
        ?
        <View style={ styles.container }>
                <TouchableOpacity style={{
                    height: 100,
                    width: 100,
                    backgroundColor: "white",
                    borderRadius: 4
                }}
                    onPress={() => flipCard(id)}
                />
        </View>
                :
                <View style={ styles.container }>
                <ImageBackground
                source={{ uri: image }}
                style={ styles.cardImage }
                >
                </ImageBackground>
                </View>
                )
    }

export default MatchCards;
