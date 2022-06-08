import { View, Text, ScrollView, Image } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';

const Card = ({ title, image, route, catId }) => {
    const navigation = useNavigation();

    return (
        <View style={{ width: 150, height: 200, justifyContent: "space-around", alignItems: "center" }}>
            <TouchableOpacity
                onPress={() => navigation.navigate(`${route}`, { id: catId})}
                style={{ height: 150, width: 150, justifyContent: "center", alignItems: "center", borderRadius: 6}}
            >
                    <Image
                        style={ styles.cardImage }
                        source={{ uri: image }}
                    />
                    <Text style={{textAlign: "center", fontWeight: "bold", "color": "white", fontSize: 16}}>
                        {title}
                    </Text>
            </TouchableOpacity>
        </View>
    )
}

export default Card;