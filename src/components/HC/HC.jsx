import { View, Text, Image, Button } from 'react-native';
import React from 'react';
import styles from './styles';
import { ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native';

const HC = ({ title, image, description }) => {
    const navigation = useNavigation();
    
    return (
        <ScrollView style={{ padding: 10}}>
            <TouchableOpacity 
                style={ styles.cardContainer }
                onPress={() => navigation.navigate(`${title}`)}    
            >
                <Image style={styles.cardImage} source={{ uri: image }} />
                <View style={{ justifyContent: "center", alignItem: "center", height: 35, width: 125, borderWidth: 2, borderBottomRightRadius: 6, borderBottomLeftRadius: 6, borderColor: "grey" }}>
                    <Text style={{ fontWeight: "bold", textAlign: "center"}}>
                        {title}
                    </Text>
                </View>
            </TouchableOpacity>
        </ScrollView>
    )
}

export default HC;