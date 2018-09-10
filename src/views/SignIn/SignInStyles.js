import { StyleSheet } from 'react-native'
import { Metrics, ApplicationStyles } from '../../themes'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  signIn__backButton: {
    paddingHorizontal: 10,
    paddingTop: 60,
    position: 'absolute',
    zIndex: 10,
  },
  signIn__logo: {
    height: Metrics.images.medium,
    marginTop: 40,
    resizeMode: 'contain',
  },
})
