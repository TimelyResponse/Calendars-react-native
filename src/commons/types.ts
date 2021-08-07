import {ColorValue, TextStyle} from 'react-native';
export interface Theme {
  container?: object;
  contentStyle?: object;
  header?: object;
  headerText?: object;
  arrowButton?: object;
  event?: object;
  eventTitle?: object;
  eventSummary?: object;
  eventTimes?: object;
  line?: object;
  lineNow?: object;
  timeLabel?: object;
  todayTextColor?: string;
  calendarBackground?: string;
  indicatorColor?: ColorValue;
  stylesheet?: {
    calendar?: {main?: object, header?: object};
    day?: {basic?: object; period?: object};
    dot?: object;
    marking?: object;
    'calendar-list'?: {main?: object};
    agenda?: {main?: object, list?: object};
  };
  textSectionTitleColor?: string;
  textSectionTitleDisabledColor?: string;
  dayTextColor?: string;
  selectedDayTextColor?: string;
  monthTextColor?: string;
  selectedDayBackgroundColor?: string;
  arrowColor?: string;
  textDisabledColor?: string;
  backgroundColor?: string;
  dotColor?: string;
  selectedDotColor?: string;
  disabledArrowColor?: string;
  textDayFontFamily?: string;
  textMonthFontFamily?: string;
  textDayHeaderFontFamily?: string;
  textDayFontWeight?: string;
  textMonthFontWeight?: string;
  textDayHeaderFontWeight?: TextStyle['fontWeight'];
  textDayFontSize?: number;
  textMonthFontSize?: number;
  textDayHeaderFontSize?: number;
  agendaDayTextColor?: string;
  agendaDayNumColor?: string;
  agendaTodayColor?: string;
  agendaKnobColor?: string;
  foregroundColor?: string;
  separatorColor?: string;
  processedColor?: string;
  processingColor?: string;
  failedColor?: string;
  textSecondaryColor?: string;
  textDefaultColor?: string;
  textColor?: string;
  textLinkColor?: string;
  todayButtonFontFamily?: string;
  todayButtonFontWeight?: string;
  todayButtonFontSize?: number;
  textDayStyle?: object;
  dotStyle?: object;
  arrowStyle?: object;
  todayBackgroundColor?: string;
  disabledDotColor?: string;
  todayDotColor?: string;
  todayButtonTextColor?: string;
  todayButtonPosition?: string;
  arrowHeight?: number;
  arrowWidth?: number;
}
