import { View, Text, FlatList } from 'react-native';
import React from 'react';

import MatchCards from '../MatchCards/MatchCards.jsx';

const MatchCardsContainer = ({ cards, flipCard }) => {
    // console.log(cards);
    return (
        <View>
            <FlatList
                numColumns={ 5 }
                data={ cards }
                style={{ marginTop: "10%" }}
                extraData={ cards }
                renderItem={({ item: { image, id, aId, matched, flipped } }) => {
                    return (
                        <MatchCards
                            image={ image }
                            id={id}
                            aId={ aId }
                            matched={matched}
                            flipped={flipped}
                            flipCard={flipCard}
                        />
                    )
                }}
                keyExtractor={ (cards) => cards.id }
            />
        </View>
    )
}

export default MatchCardsContainer;