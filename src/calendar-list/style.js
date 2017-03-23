import {StyleSheet} from 'react-native';
import * as appStyle from '../style';

export default StyleSheet.create({
  placeholder: {
    backgroundColor: appStyle.foregroundColor,
    alignItems: 'center',
    justifyContent: 'center'
  },
  placeholderText: {
    fontSize: 30,
    fontWeight: '200',
    color: appStyle.textDefaultColor
  },
  calendar: {
    paddingLeft: 15,
    paddingRight: 15
  }
});

