import React from 'react';
import { View, ImageBackground, Text } from 'react-native';

import bgImg from '../../assets/images/give-classes-background.png';

import styles from './styles';
import { RectButton } from 'react-native-gesture-handler';

function GiveClasses() {
  return (
    <View style={styles.container}>
      <ImageBackground 
        resizeMode='contain' 
        source={bgImg} 
        style={styles.content}
      >
        <Text style={styles.title}>Quer ser um Proffy?</Text>
        <Text style={styles.description}>
          Para começar, você precisa se cadastrar como professor na nossa plataforma web.
        </Text>

      </ImageBackground>

      <RectButton style={styles.okButton}>
        <Text style={styles.buttonText}>Tudo bem</Text>
      </RectButton>
    </View>
  );
}

export default GiveClasses;