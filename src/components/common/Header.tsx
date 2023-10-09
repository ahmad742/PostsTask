import {View, Text} from 'react-native';
import React from 'react';
import styles from '../../screens/PostListScreen/styles';

const Header = () => {
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.headerText}>{'Post List'}</Text>
    </View>
  );
};

export default Header;
