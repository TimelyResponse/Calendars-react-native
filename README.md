# React Native Calendar Components ✨ 🗓️ 📆

This module includes various customizeable react native calendar components. The package is both android and ios compatible. Last tested with react-native 0.44.0.

## Try it out

You can check demo usage in [example module screens](https://github.com/wix-private/wix-react-native-calendar/tree/master/example/src/screens)

You can also run example module by performing these steps:

```
$ git clone git@github.com:wix-private/wix-react-native-calendar.git
$ cd wix-react-native-calendar/example
$ npm install
$ react-native run-ios
```

## Installation

```
$ npm install --save-dev wix-react-native-calendar
```

## Usage

`import {` [Calendar](#calendar), [CalendarList](#calendarlist), [Agenda](#agenda) `} from 'wix-react-native-calendar';`

### Calendar

![Calendar demo](https://github.com/wix-private/wix-react-native-calendar/blob/master/demo/calendar.gif?raw=true)

All parameters are optional. By default the month of current local date will be displayed.

Parameters that require date types accept YYYY-MM-DD formated datestrings and JavaScript date objects.

#### Basic parameters

```javascript
<Calendar 
  // Initially visible month. Default = Date()
  current={'2012-03-01'}
  // Minimum date that can be selected, dates before minDate will be grayed out. Default = undefined
  minDate={'2012-05-10'}
  // Handler which gets executed on day press. Default = undefined
  onDayPress={(day) => {console.log('selected day', day)}}
  // Handler which gets executed when visible month changes in calendar. Default = undefined
  onMonthChange={(month) => {console.log('month changed', month)}
  // Hide month navigation arrows. Default = false
  hideArrows={true}
  // Do not show days of other months in month page. Default = false
  hideExtraDays={true}
  // If hideArrows=false and hideExtraDays=false do not swich month when tapping on greyed out
  // day from another month that is visible in calendar page. Default = false
  disableMonthChange={true}
/>
```

#### Date marking

```javascript
<Calendar 
  // Array of dates that should be marked as selected (round circle). Default = []
  selected={['2012-05-16', Date()]}
  // Collection of dates that have to be colored in a special way. Default = []
  markedDates={{'2012-05-24': [true], '2012-05-25': [true]}}
  // Date marking style [normal/interactive]. Default = 'normal'
  markingType={'interactive'}
/>
```

#### Displaying data loading indicator

```
  // Loading spinner will be displayed if markedDays is set and at least one day of
  // displayed month does not have a matching key in markedDays hash map
  displayLoadingIndicator
```

#### Customizing look & feel

* style - calendar container style

### CalendarList

`<CalendarList />` - scrollable semi-infinite calendar composed of `<Calendar />` components

* onVisibleMonthsChange - visible months change listener (for `<CalendarList />`)

### Agenda

