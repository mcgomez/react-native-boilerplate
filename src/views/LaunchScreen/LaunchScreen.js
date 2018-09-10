import React, { Component } from 'react'
import { ScrollView, Image, View } from 'react-native'
import { createStackNavigator } from 'react-navigation'
import PropTypes from 'prop-types'

import { Images } from '../../themes'
import { RoundedButton } from '../../components'

// Styles
import styles from './LaunchScreenStyles'

// Screens
import Register from '../Register/Register'
import SignIn from '../SignIn/SignIn'

class LaunchScreen extends Component {
  openRegister() {
    const { navigation } = this.props
    navigation.navigate('Register')
  }

  render() {
    return (
      <View style={styles.mainContainer}>
        <Image
          source={Images.backgroundSolid}
          style={styles.backgroundImage}
          resizeMode="stretch"
        />
        <ScrollView style={styles.launchScreen__container}>
          <View style={styles.launchScreen__centered}>
            <Image source={Images.logo} style={styles.launchScreen__logo} />
          </View>

          <View style={styles.section}>
            <RoundedButton onPress={() => this.openRegister}>
              Sign Up
            </RoundedButton>
          </View>
        </ScrollView>
      </View>
    )
  }
}

LaunchScreen.propTypes = {
  navigation: PropTypes.object.isRequired,
}

export default createStackNavigator(
  {
    LaunchScreen: { screen: LaunchScreen },
    Register: { screen: Register },
    SignIn: { screen: SignIn },
  },
  {
    initialRouteName: 'LaunchScreen',
    headerMode: 'none',
  },
)
