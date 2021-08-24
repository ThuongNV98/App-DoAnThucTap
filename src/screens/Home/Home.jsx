import React from 'react';
import {View, Text, ImageBackground} from 'react-native';
import Constants from '../../common/Constants';
import styles from './Home.style';

const Home = props => {
  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.imgContainer}
        source={Constants.IMG_BACKGROUND}>
        <Text style={styles.textWellCome}>{Constants.TEXT_WELLCOME}</Text>
      </ImageBackground>
    </View>
  );
};

export default Home;
