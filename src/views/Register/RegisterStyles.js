import { StyleSheet } from 'react-native'
import { Metrics, ApplicationStyles } from '../../themes'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  register__backButton: {
    paddingHorizontal: 10,
    paddingTop: 60,
    position: 'absolute',
    zIndex: 10,
  },
  register__logo: {
    height: Metrics.images.medium,
    marginTop: 40,
    resizeMode: 'contain',
  },
})
