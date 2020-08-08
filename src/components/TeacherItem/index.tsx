import React, { useState } from 'react';
import { View, Image, Text, Linking } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-community/async-storage'

import heartOutlineIcon from '../../assets/images/icons/heart-outline.png';
import unFavoriteIcon from '../../assets/images/icons/unfavorite.png';
import whatsappIcon from '../../assets/images/icons/whatsapp.png';

import styles from './styles';
import api from '../../services/api';

export interface Teacher {
  avatar: string;
  bio: string;
  cost: number;
  id: number;
  name: string;
  subject: string;
  whatsapp: string;
}

interface TeacherItemProps {
  teacher: Teacher;
  favorited: boolean;
}

const TeacherItem: React.FC<TeacherItemProps> = ({ teacher, favorited }) => {
  const [isFavorited, setIsFavorited] = useState(favorited);

  function createNewConnection() {
    api.post("connections", {
      user_id: teacher.id
    })
  }

  async function handleToggleFavorite() {
    const favorites = await AsyncStorage.getItem('favorites');
    
    let favoritesArray: Array<number> = []; 

    if (favorites) {
      favoritesArray = JSON.parse(favorites);
    }
    
    if (isFavorited) {
      const favoriteIndex = favoritesArray.findIndex((teacherId: number) => {
        return teacherId === teacher.id
      });

      favoritesArray.splice(favoriteIndex, 1);

      setIsFavorited(false);

      await AsyncStorage.setItem('favorites', JSON.stringify(favoritesArray));
    } else {
      favoritesArray.push(teacher.id);
      
      setIsFavorited(true);
      
      await AsyncStorage.setItem('favorites', JSON.stringify(favoritesArray));
    }
  }

  function linkToWhatssap() {
    Linking.openURL(`whatsapp://send?phone=${teacher.whatsapp}`);
    createNewConnection();
  }

  return(
    <View style={styles.container}>
      <View style={styles.profile}>
        <Image 
          source={{ uri: teacher.avatar }}
          style={styles.avatar}
          />

        <View style={styles.profileInfo}>
          <Text style={styles.name}>{teacher.name}</Text>
          <Text style={styles.subject}>{teacher.subject}</Text>
        </View>
      </View>

      <Text style={styles.bio}>{teacher.bio}</Text>

      <View style={styles.footer}>
        <Text style={styles.price}>
          Preço/Hora {'  '}
          <Text style={styles.priceValue}>
            R$ {teacher.cost}
          </Text>
        </Text>

        <View style={styles.buttonsContainer}>
          <RectButton 
            style={[
                styles.favoritesButton, 
                isFavorited ? styles.favorited : {}
            ]}
            onPress={handleToggleFavorite}
          >
            { isFavorited 
              ? <Image source={unFavoriteIcon} /> 
              : <Image source={heartOutlineIcon}/>
            }
          </RectButton>

          <RectButton 
            style={styles.contactButton}
            onPress={linkToWhatssap}
          >
            <Image source={whatsappIcon}/>
            <Text style={styles.contactButtonText}>
              Entrar em contato
            </Text>
          </RectButton>
        </View>
      </View>
    </View>
  );
}

export default TeacherItem;