import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import styles from './styles';

const VictoryBox = () => {
    const navigation = useNavigation();

    return (
        <View style={ styles.container }>
            <View style={ styles.victoryTextContainer} >
                <Text>VICTORY!</Text>
            </View>
            <TouchableOpacity
                style={ styles.victoryButton }
                onPress={() => navigation.navigate("Animals")}
            >
                <Text style={ styles.victoryButtonText }>Go Back</Text>
            </TouchableOpacity>
        </View>
    )
}

export default VictoryBox;