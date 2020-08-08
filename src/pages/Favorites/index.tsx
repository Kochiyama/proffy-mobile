import React, { useState, useEffect } from 'react';
import { View, ScrollView, AsyncStorage } from 'react-native';

import api from '../../services/api';

import PageHeader from '../../components/PageHeader';
import TeacherItem, { Teacher } from '../../components/TeacherItem';

import styles from './styles';

function Favorites() {
  const [favorites, setFavorites] = useState([]);
  const [pages, setPages] = useState(0);
  const [teachers, setTeachers] = useState([]);

  function loadFavorites() {
    AsyncStorage.getItem('favorites').then(response => {
      if (response) {
        const favoritedTeachers = JSON.parse(response);

        setFavorites(favoritedTeachers);
      }
    })
  }

  async function loadFavoriteTeachers() {
    const response = await api.get(`/classes/${pages}`);

    const teachersArray = JSON.parse(response);

    for (responseClass of response) {

    }
  
    console.log(response.data[0].avatar);
  }

  useEffect(() => {
    console.log('load')
    loadFavorites();
    loadFavoriteTeachers();
  }, [])

  return (
    <View style={styles.container}>
      <PageHeader title="Meus proffys favoritos"/>

      <ScrollView
        style={styles.teacherList}
        contentContainerStyle={{
          paddingHorizontal: 16,
          paddingBottom: 12
        }}
      >
        {favorites.map((teacher: Teacher) => {
          return (
            <TeacherItem 
              key={teacher.id}
              teacher={teacher}
              favorited={favorites.includes(teacher.id)}
            />
          );
        })}
      </ScrollView>
    </View>
  );
}

export default Favorites;