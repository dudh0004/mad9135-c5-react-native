import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function HomeScreen() {

    return (
        <SafeAreaView style={styles.container} edges={['right', 'bottom', 'left']}>
            <View>
                <Text style={styles.text}>Welcome to my react native app! </Text>
                <Image
                    style={styles.image}
                    source={{
                        uri: 'https://images.unsplash.com/photo-1543269865-cbf427effbad?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Z3JvdXB8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
                    }}
                />
                <Text style={styles.text2}>To see the list of users click on list icon from the bottom tab. </Text>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#DCDCDC',
    },
    image: {
        width: 420,
        height: 500,
        padding: 10
    },
    text: {
        fontSize: 26,
        textAlign: 'center',
        color: '#2F4F4F',
        padding: 10 
    },
    text2: {
        fontSize: 20,
        textAlign: 'center',
        color: '#2F4F4F',
        paddingTop: 15
    }
});
