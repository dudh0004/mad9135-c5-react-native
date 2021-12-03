import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  FlatList,
} from 'react-native';



export default function App() {
  const baseURL = 'https://randomuser.me/api/?format=json&results=40&nat=US,CA,NZ';
  const [users, setUsers] = useState([]);

  const getData = (type) => {
    fetch(baseURL)
      .then((resp) => {
        if (!resp.ok) throw new Error(resp.statusText);
        return resp.json();
      })
      .then((data) => {
        let results = data.results.map((item, index) => {
          return { ...item, key: index  };
        });
        setUsers(results);
      })
      .catch((err) => {
        console.error(err.message);
      });
  };


  useEffect(() => {
    getData();
  }, []);


  return (
    <SafeAreaView style={styles.container} >
      <FlatList
        data = {users}
        renderItem = {(item) => <Users users = {item} />}
      />
    </SafeAreaView>
  );
}

function Users({ users }) {

  const { name, email, location, phone, key } = users.item;
  return(
    <View>
      <Text>{name.first} {name.last}</Text>
      <Text>{email}</Text>
      <Text>{location.city}</Text>
      <Text>{phone}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#A9A9A9',
  },
});