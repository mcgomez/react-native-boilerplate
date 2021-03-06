import { StyleSheet } from 'react-native'
import { Colors, Metrics, ApplicationStyles } from '../DevTheme/'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  groupContainer: {
    ...ApplicationStyles.groupContainer,
  },
  sectionHeaderContainer: {
    ...ApplicationStyles.darkLabelContainer,
  },
  sectionHeader: {
    ...ApplicationStyles.darkLabel,
  },
  colorsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  backgroundContainer: {
    position: 'relative',
    width: 102,
    height: 102,
    borderWidth: 1,
    borderColor: Colors.lightestBlue,
  },
  backerImage: {
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    position: 'absolute',
    resizeMode: 'stretch',
  },
  colorContainer: {
    height: 130,
    padding: Metrics.smallMargin,
    marginBottom: Metrics.smallMargin,
  },
  colorSquare: {
    width: 100,
    height: 100,
  },
  colorName: {
    width: 100,
    height: Metrics.doubleBaseMargin,
    lineHeight: Metrics.doubleBaseMargin,
    color: Colors.black,
    textAlign: 'center',
  },
  fontRow: {
    padding: Metrics.smallMargin,
    marginHorizontal: Metrics.smallMargin,
    color: Colors.white,
  },
})
