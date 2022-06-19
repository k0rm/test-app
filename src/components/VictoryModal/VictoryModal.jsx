import { View, Text } from 'react-native';
import React from 'react';
import styles from './styles';

import VictoryBox from '../VictoryBox/VictoryBox';

const VictoryModal = () => {
    return (
        <View style={ styles.container }>
            <VictoryBox/>
        </View>
    )
}

export default VictoryModal;