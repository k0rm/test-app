import { View, Text } from 'react-native'
import React, { useState, useEffect } from 'react'

import { db } from '../../../../firebase';
import { ref, onValue } from 'firebase/database';

import MatchCardsContainer from '../../../components/MatchCardsContainer/MatchCardsContainer.jsx';
import VictoryModal from '../../../components/VictoryModal/VictoryModal';

const MatchEm = ({ route, id }) => {
    const [data, setData] = useState([]);
    const [counter, setCounter] = useState(0);
    const [score, setScore] = useState(0);
    const [victory, setVictory] = useState(false);

    useEffect(() => {
        const newData = ref(db, "matchEm");
        onValue(newData, (snapshot) => {
            const dt = snapshot.val();
            setData(dt);
        })
    }, [])
    

    const checkMatch = async (ids) => {
        let temp = [];
        if (data[ids[0]].aId === data[ids[1]].aId) {
            data[ids[0]].matched = true; data[ids[1]].matched = true;
            setScore(score+1);

            for (let i = 0; i < data.length; i++) {
                temp.push(data[i]);
            }
            setData(temp);
        }
        else {
            for (let j = 0; j < data.length; j++) {
                if (!data[j].matched === true) {
                    data[j].flipped = false;
                }
                temp.push(data[j])
            }
            setData(temp);
        }
    }

    const flipCard = (id) => {
        if (score === 4) {setVictory(true); setData([]); setData(gameData.matchEm)}
        let asd = [];
        let idx = [];
        setCounter(counter + 1);
        for (let i = 0; i < data.length; i++) {
            if (data[i].id === id) {
                data[i].flipped = true;
            }
            if (data[i].flipped === true && data[i].matched === false) {
                idx.push(i);
            }
            asd.push(data[i]);
        }

        
        if (counter === 1) {
            setData(asd);
            setTimeout(() => {
                console.log("I EAT B<^n$");
                checkMatch(idx);
                setCounter(0);
            }, 300)
        }
    }

    return (
        <View style={{ flex: 1, backgroundColor: "#565656"}}>
            {victory
            ?
            <VictoryModal/>
            :
            <MatchCardsContainer
                cards={ data }
                flipCard={ flipCard }
            />
            }
        </View>
    )
}

export default MatchEm;