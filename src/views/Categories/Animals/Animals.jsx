import { View, Text, ScrollView } from 'react-native';
import React, { useState, useEffect } from 'react';

import { db } from '../../../../firebase';
import { ref, onValue } from 'firebase/database';

import CardContainer from './../../../components/CardContainer/CardContainer.jsx';

const Animals = () => {
	const [data, setData] = useState([]);

	useEffect(() => {
		const data = ref(db, "AnimalCategories");
		onValue(data, (snapshot) => {
			const dt = snapshot.val();
			setData(dt);
		})
	}, [])

	return (
	<ScrollView horizontal={true} style={{ flex: 1, backgroundColor: "purple" }}>
		{data.length > 1
		?
		<CardContainer
			cards={data}
		/>
		:
		<View>
			<Text>HERLO</Text>
		</View>
		}
	</ScrollView>
	)
}

export default Animals;