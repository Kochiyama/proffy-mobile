import { StyleSheet } from 'react-native';
import { Poppins_400Regular } from '@expo-google-fonts/poppins';
import { Archivo_700Bold } from '@expo-google-fonts/archivo';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#8257e5',
    justifyContent: 'center',
    padding: 40,
  },

  content: {
    flex: 1,
    justifyContent: 'center'
  },
  
  title: {
    fontFamily: 'Archivo_700Bold',
    color: '#fff',
    fontSize: 32,
    lineHeight: 37,
    maxWidth: 180
  },

  description: {
    marginTop: 24,
    color: '#d4c2ff',
    fontSize: 16,
    lineHeight: 26,
    fontFamily: 'Poppins_400Regular',
    maxWidth: 440
  },

  okButton: {
    
  },

  buttonText: {
    
  }
});

export default styles;