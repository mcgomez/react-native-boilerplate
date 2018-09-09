import { StyleSheet } from 'react-native'
import { Colors, Metrics, Fonts } from '../../themes'

export default StyleSheet.create({
  alert__container: {
    backgroundColor: Colors.darkGray,
    justifyContent: 'center',
    marginVertical: Metrics.section,
  },
  alert__contentContainer: {
    alignItems: 'center',
    alignSelf: 'center',
  },
  alert__message: {
    color: Colors.black,
    fontFamily: Fonts.type.base,
    fontSize: Fonts.size.regular,
    fontWeight: 'bold',
    marginHorizontal: Metrics.baseMargin,
    marginVertical: Metrics.baseMargin,
    textAlign: 'center',
  },
})
