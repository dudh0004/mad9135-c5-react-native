import React from 'react'
import { StyleSheet, Text, View} from 'react-native';

export default function ListScreen({navigation, route}) {
    return (
        <View>
            <Text>The List Screen</Text>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
