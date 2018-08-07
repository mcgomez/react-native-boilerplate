import { StyleSheet } from 'react-native'
import { Fonts, Colors, Metrics } from '../../../themes/'

export default StyleSheet.create({
  button: {
    height: 45,
    borderRadius: 5,
    marginHorizontal: Metrics.section,
    marginVertical: Metrics.baseMargin,
    backgroundColor: Colors.white,
    justifyContent: 'center',
  },
  buttonText: {
    color: Colors.blue,
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: Fonts.size.medium,
    marginVertical: Metrics.baseMargin,
  },
})
