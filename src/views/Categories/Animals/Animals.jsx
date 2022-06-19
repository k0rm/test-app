import { View, Text, ScrollView } from 'react-native';
import React, { useState } from 'react';
import data from '../../../resources/animalCategories.json';

import CardContainer from './../../../components/CardContainer/CardContainer.jsx';

const Animals = () => {
	let categories = data.AnimalCategories;
	// console.log(categories);
	return (
	<ScrollView horizontal={true} style={{ flex: 1, backgroundColor: "purple" }}>
		<CardContainer
			cards={categories}
		/>
	</ScrollView>
	)
}

export default Animals;