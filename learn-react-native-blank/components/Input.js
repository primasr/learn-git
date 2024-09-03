import React, { useState } from "react"
import { Text, Button, View, StyleSheet, TextInput } from "react-native"

// Membuat Komponen Input 

const Input = ({onAddPerson}) => {
    const [name, setName] = useState('')
    const [amount, setAmount] = useState('')

    const addPerson = () => {
        onAddPerson({name, amount: parseFloat(amount)})
        setName('')
        setAmount('')
    }

    return(
        <View style={styles.container}>
            <TextInput
                styles={styles.input}
                placeholder='Name'
                value={name}
                onChangeText={setName}>
            </TextInput>
            <TextInput
                styles={styles.input}
                placeholder='Amount'
                value={amount}
                onChangeText={setAmount}>
            </TextInput>
            <Button 
                title="Add"
                onPress={addPerson}>
            </Button>
        </View>
    )
}

const styles = StyleSheet.create(
    {
        container: {
            flexDirection: 'row',
            marginBottom: 16
        },
        input: {
            flex: 1,
            marginHorizonal: 8,
            padding: 8,
            borderColor: '#00000',
            borderWidth: 1,
            borderRadius: 4
        }
    }
)

export default Input