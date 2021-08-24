import React from 'react';
import PropTypes from 'prop-types';
import {View, Text, TouchableOpacity} from 'react-native';

const ButtonLarge = props => (
  <TouchableOpacity onPress={props.onPress} activeOpacity={0.7}>
    <Text>{props.title}</Text>
  </TouchableOpacity>
);

export default Button;
