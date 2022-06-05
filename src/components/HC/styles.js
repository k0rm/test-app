import { StyleSheet } from "react-native";

export default styles = StyleSheet.create({
    cardImage: {
        maxHeight: 100,
        height: 100,
        width: 125,
        top: 0,
        resizeMode: "stretch",
        borderTopRightRadius: 12,
        borderTopLeftRadius: 12
    },
    cardContainer: {
        flexDirection: "column",
        backgroundColor: "white",
        alignItems: "center",
        // height: 200,
        width: 125,
        "borderRadius": 6,

    }
})