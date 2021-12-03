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
    <View style = {styles.view}>
      <Text style = {styles.heading}>{name.first} {name.last}</Text>
      <Text style = {styles.email}>{email}</Text>
      <Text style = {styles.content}>{phone}</Text>
      <Text style = {styles.content}>{location.city}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#DCDCDC',
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    paddingVertical: 10,
    paddingHorizontal: 10
  },
  view: {
    borderBottomWidth: 1,
    paddingTop: 10,
    paddingBottom: 10,
    paddingHorizontal: 10,
  },
  heading: {
    fontSize: 30,
    color: '#2F4F4F',
    fontWeight: '900',
  },
  email: {
    fontSize: 15,
    color: '#0096FF'
  },
  content: {
    fontSize: 15,
    color: '#696969',
  }
});