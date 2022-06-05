import { View, Text, Image } from 'react-native';
import React from 'react';
import styles from './styles';

const HC = ({ title, image, description }) => {
    return (
        <View style={{ width: 200, height: 150, justifyContent: "center", alignItems: "center" }}>
            <Text>{title}</Text>
            <Image style={styles.cardImage} source={{ uri: image }} />
            <Text>{description}</Text>
        </View>
    )
}

export default HC;