import { View, Text } from 'react-native'
import React, { useState } from 'react'
import { Image } from 'react-native';
import styles from './styles';
import { ImageBackground } from 'react-native';
import { TouchableOpacity } from 'react-native';
import { Pressable } from 'react-native';

const MatchCards = ({ image, id }) => {
    const [idOne, setIdOne] = useState(1337);
    const [idTwo, setIdTwo] = useState(1337);
    const [show, setShow] = useState(true);


    const setIds = () => {
        setShow(!show);
        console.log(id);
        if (idOne === 1337) { setIdOne(id) }
        else if (idTwo === 1337) { setIdTwo(id) }
        else {
            let i1 = idOne, i2 = idTwo;
            setIdOne(1337), setIdTwo(1337);
        }
        
    }

    return (
        <View style={ styles.container }>
            <ImageBackground
                source={{ uri: image }}
                style={ styles.cardImage }
            >
                {show && <TouchableOpacity style={{ 
                    height: 100, 
                    width: 100,
                    backgroundColor: "white",
                    borderRadius: 4
                }} 
                    onPress={() => setIds()}
                />}
            </ImageBackground>
        </View>
    )
}

export default MatchCards;
