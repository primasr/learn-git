import React, { useState } from "react";
import { Text, Button, View, StyleSheet, TextInput } from "react-native"

const Summary = ({people}) => {
    // 1. hitung total biaya 
    const totalAmount = people.reduce((sum, person) => sum + person.amount, 0)

    // 2. bagi total biaya dengan jumlah orang 
    const splitAmount = totalAmount / people.length

    return(
        <View style={styles.container}>
            <Text 
                style={styles.total}
                placeholder='Total Amount'>
                Total Amount: Rp{totalAmount.toFixed(2)}
            </Text>
            <Text 
                style={styles.split}
                placeholder='Split Amount'>
                Split Amount: Rp{splitAmount.toFixed(2)}
            </Text>
        </View>
    )
}

const styles = StyleSheet.create(
    {
        container: {
            marginVertical: 16,
            padding: 16,
            backgroundColor: '#fff',
            borderRadius: 6,
            shadowColor: '#000',
            shadowOpacity: 0.3,
            shadowRadius: 5,
            shadowOffset: {width: 0, height: 2},
            elevation: 2
        },
        total: {
            fontSize: 10,
            fontWeight: 'bold'
        },
        split: {
            fontSize: 10,
            marginTop: 8
        },
    }
)

export default Summary