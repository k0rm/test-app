import { View, Text } from 'react-native'
import React, { useState } from 'react'

import gameData from '../../../resources/animalsGame.json';
import MatchCardsContainer from '../../../components/MatchCardsContainer/MatchCardsContainer.jsx';


const MatchEm = ({ route, id }) => {
    let data = gameData.matchEm;

    return (
        <View style={{ flex: 1, backgroundColor: "#565656"}}>
            <MatchCardsContainer
                cards={ data }
            />
        </View>
    )
}

export default MatchEm;