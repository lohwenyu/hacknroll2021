import React from "react";
import { Dimensions, StyleSheet, Text, TouchableOpacity } from "react-native";

export default function Button({ name, onPress, color }) {
    if (color == "blue") {
        return (
            <TouchableOpacity onPress={onPress} style={styles.blue}>
                <Text style={styles.text}>{name}</Text>
            </TouchableOpacity>
        );
    } else if (color == "green") {
        return (
            <TouchableOpacity onPress={onPress} style={styles.green}>
                <Text style={styles.text}>{name}</Text>
            </TouchableOpacity>
        );
    } else {
        return (
            <TouchableOpacity onPress={onPress} style={styles.red}>
                <Text style={styles.text}>{name}</Text>
            </TouchableOpacity>
        );
    }
}

const dimensions = Dimensions.get("window");
const deviceWidth = dimensions.width;

const styles = StyleSheet.create({
    blue: {
        backgroundColor: "#15F4EE",
        width: deviceWidth * 0.80,
        height: 35,
        justifyContent: "center",
        borderRadius: 7
    },
    green: {
        backgroundColor: "#15F41E",
        width: deviceWidth * 0.80,
        height: 35,
        justifyContent: "center",
        borderRadius: 7
    },
    red: {
        backgroundColor: "#FF0000",
        width: deviceWidth * 0.80,
        height: 35,
        justifyContent: "center",
        borderRadius: 7
    },
    text: {
        fontSize: 20,
        fontWeight: "600",
        textAlign: "center"
    }
});