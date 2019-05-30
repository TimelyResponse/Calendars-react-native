import {StyleSheet, Platform} from 'react-native';
import * as defaultStyle from '../style';

const STYLESHEET_ID = 'stylesheet.expandable.main';

export default function styleConstructor(theme={}) {
  const appStyle = {...defaultStyle, ...theme};
  return StyleSheet.create({
    containerShadow: {
      backgroundColor: appStyle.calendarBackground,
      ...Platform.select({
        ios: {
          shadowColor: '#79838A',
          shadowOpacity: 0.2,
          shadowRadius: 2,
          shadowOffset: {height: 6, width: 0},
          zIndex: 99
        },
        android: {
          elevation: 6
        }
      })
    },
    container: {
      backgroundColor: appStyle.calendarBackground
    },
    knobContainer: {
      position: 'absolute',
      left: 0,
      right: 0,
      height: 24,
      bottom: 0,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: appStyle.calendarBackground
    },
    knob: {
      width: 40,
      height: 4,
      borderRadius: 3,
      backgroundColor: '#e8ecf0'
    },
    sectionText: {
      fontWeight: 'bold', 
      fontSize: 12,
      lineHeight: 16,
      color: '#7a92a5',
      paddingTop: 24, // 8
      paddingBottom: 8,
      paddingLeft: 20,
      backgroundColor: appStyle.calendarBackground
    },
    header: {
      position: 'absolute',
      left: 0,
      right: 0,
      backgroundColor: appStyle.calendarBackground
    },
    headerTitle: {
      alignSelf: 'center',
      paddingTop: 13,
      paddingBottom: 18,
      fontSize: appStyle.textMonthFontSize,
      fontFamily: appStyle.textMonthFontFamily,
      fontWeight: appStyle.textMonthFontWeight,
      color: appStyle.monthTextColor
    },
    weekDayNames: {
      flexDirection: 'row', 
      justifyContent: 'space-between' 
    },
    weekday: {
      width: 32,
      textAlign: 'center',
      fontSize: appStyle.textDayHeaderFontSize,
      fontFamily: appStyle.textDayHeaderFontFamily,
      fontWeight: appStyle.textDayHeaderFontWeight,
      color: appStyle.textSectionTitleColor
    },
    monthView: {
      backgroundColor: appStyle.calendarBackground
    },
    week: {
      marginTop: 7,
      marginBottom: 7,
      flexDirection: 'row',
      justifyContent: 'space-around'
    },
    arrowImage: {
      tintColor: appStyle.arrowColor
    },
    todayButtonContainer: {
      position: 'absolute', 
      left: 20, 
      right: 0, 
      bottom : 0
    },
    todayButton: {
      width: 82, 
      height: 28, 
      borderRadius: 14, 
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'white',
      ...Platform.select({
        ios: {
          shadowColor: '#79838A',
          shadowOpacity: 0.3,
          shadowRadius: 14,
          shadowOffset: {height: 6, width: 0}
        },
        android: {
          elevation: 6
        }
      })
    },
    todayButtonText: {
      color: appStyle.todayButtonTextColor,
      fontSize: 14, 
      fontWeight: '600'
    },
    todayButtonImage: {
      tintColor: appStyle.todayButtonTextColor, 
      marginRight: 7
    },
    ...(theme[STYLESHEET_ID] || {})
  });
}
