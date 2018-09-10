import { StyleSheet } from 'react-native'
import { Metrics, ApplicationStyles } from '../../themes'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  launchScreen__container: {
    paddingBottom: Metrics.baseMargin,
  },
  launchScreen__logo: {
    height: Metrics.images.logo,
    marginTop: Metrics.doubleSection,
    resizeMode: 'contain',
    width: Metrics.images.logo,
  },
  launchScreen__centered: {
    alignItems: 'center',
  },
})
