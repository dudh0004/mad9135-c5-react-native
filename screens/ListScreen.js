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
  const [people, setPeople] = useState([]);

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
        setPeople(results);
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
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#A9A9A9',
  },
});