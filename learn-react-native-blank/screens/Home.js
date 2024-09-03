import React, { useState } from "react";
import { ScrollView, Text, Button, View, StyleSheet, TextInput } from "react-native";

import Input from "../components/Input";
import Summary from "../components/Summary";

const HomeScreen = () => {
    const [people, setPeople] = useState([])

    const addPerson = (person) => {
        setPeople([...people, person])
    }

    return(
        <ScrollView style={styles.container}>
            <Input onAddPerson={addPerson}/>
            <Summary people={people}/>
        </ScrollView>
    )
}

const styles = StyleSheet.create(
    {
        container: {
            padding: 16
        },
    }
)

export default HomeScreen
