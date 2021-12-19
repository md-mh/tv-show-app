import React, { useState } from 'react'
import { View, Text, StyleSheet, SafeAreaView, TextInput, Button, ScrollView } from 'react-native'
import Show from '../Show/Show';

//TV show search Option 
export default function Search() {
    const [tvShow, setTvShow] = useState([])
    const [text, onChangeText] = useState("Useless");

    return (
        <View>
            <Text>Search your favorite TV show</Text>
            <SafeAreaView>
                <TextInput
                    style={styles.input}
                    onChangeText={onChangeText}
                />
            </SafeAreaView>
            <Button
                title="Search"
                onPress={() => {
                    fetch(`https://api.tvmaze.com/search/shows?q=${text}`)
                        .then(res => res.json())
                        .then(data => setTvShow(data))
                }}
            />
            <ScrollView>
                {
                    tvShow.map(show => <Show key={show.show.id} show={show.show}></Show>)
                }
            </ScrollView>
        </View>
    )
}
const styles = StyleSheet.create({
    input: {
        height: 40,
        margin: 7,
        borderWidth: 1,
        padding: 10,
    },
});