import { View, Text, Image } from 'react-native';
import React from 'react';
import styles from './styles';
import { ScrollView } from 'react-native';

const HC = ({ title, image, description }) => {
    return (
        <ScrollView style={{ padding: 10}}>
            <View style={ styles.cardContainer }>
                <Image style={styles.cardImage} source={{ uri: image }} />
                <View style={{ justifyContent: "center", alignItem: "center", height: 35, width: 125, borderWidth: 2, borderBottomRightRadius: 6, borderBottomLeftRadius: 6, borderColor: "grey" }}>
                    <Text style={{ fontWeight: "bold", textAlign: "center"}}>{title}</Text>
                    {/* <Text>{description}</Text> */}
                </View>
            </View>
        </ScrollView>
    )
}

export default HC;