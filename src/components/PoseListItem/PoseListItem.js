import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";


const poseListItem = (props) => (
    <TouchableOpacity onPress={props.onItemPressed}>
        <View style={styles.listItem}>
            <Image resizeMode="contain" source={props.poseImage} style={styles.poseImage} />
            <Text>{props.poseName}</Text>
        </View>
    </TouchableOpacity>
);

const styles = StyleSheet.create({
    listItem: {
        width: "100%",
        marginBottom: 1,
        padding: 10,
        backgroundColor: "#eee",
        flexDirection: "row",
        alignItems: "center"
    },
    poseImage: {
        marginRight: 8,
        height: 100,
        width: 100
    }
});

export default poseListItem;