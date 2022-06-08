import { View, Text } from 'react-native'
import React, { useState } from 'react'

import gameData from '../../../resources/animalsGame.json';
import MatchCards from '../../../components/MatchCards/MatchCards';


const MatchEm = ({ route, id }) => {
    let [data, setData] = useState(gameData);

    return (
        data.matchEm.map((item) => {
            return (
                <MatchCards
                    card={item.image}
                />
            )
        })
    )
}

export default MatchEm;