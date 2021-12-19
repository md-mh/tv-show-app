import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'

//TV show single item show
export default function Show(props) {

    const { name, image, genres, status, schedule } = props.show;
    const img = image?.medium;
    return (
        <View style={styles.singleItem}>
            <Image
                source={{
                    uri: img
                }}
                style={{ width: 300, height: 200 }}
            />
            <Text>Name: {name}</Text>
            <Text>Genres: {genres[0]}</Text>
            <Text>Status: {status}</Text>
            <Text>Schedule: {schedule?.time}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    singleItem: {
        margin: 7,
        borderWidth: 1,
        padding: 5,
        borderRadius: 5,
    },
});
