import { StyleSheet } from 'react-native'
import { Colors, Metrics, Fonts } from '../../themes'

export default StyleSheet.create({
  container: {
    justifyContent: 'center',
    marginVertical: Metrics.section,
    backgroundColor: Colors.darkGray,
  },
  contentContainer: {
    alignSelf: 'center',
    alignItems: 'center',
  },
  message: {
    marginVertical: Metrics.baseMargin,
    marginHorizontal: Metrics.baseMargin,
    textAlign: 'center',
    fontFamily: Fonts.type.base,
    fontSize: Fonts.size.regular,
    fontWeight: 'bold',
    color: Colors.black,
  },
  icon: {
    color: Colors.black,
  },
})
