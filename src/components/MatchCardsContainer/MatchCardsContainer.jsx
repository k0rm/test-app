import { View, Text, FlatList } from 'react-native';
import React from 'react';

import MatchCards from '../MatchCards/MatchCards.jsx';

const MatchCardsContainer = ({ cards }) => {
    // console.log(cards);
    return (
        <View>
            <FlatList
                numColumns={ 5 }
                data={ cards }
                style={{ marginTop: "10%" }}
                extraData={ cards }
                renderItem={({ item: { image , aId } }) => {
                    return (
                        <MatchCards
                            image={ image }
                            id={ aId }
                        />
                    )
                }}
                keyExtractor={ (cards) => cards.id }
            />
        </View>
    )
}

export default MatchCardsContainer;