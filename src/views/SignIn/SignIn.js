import React, { Component } from 'react'
import {
  Image,
  KeyboardAvoidingView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { NavigationActions } from 'react-navigation'
import { Images } from '../../themes'

// Styles
import styles from './SignInStyles'

class SignInView extends Component {
  goBack() {
    const { navigation } = this.props
    const backAction = NavigationActions.back()

    navigation.dispatch(backAction)
  }

  render() {
    const { navigation } = this.props
    return (
      <KeyboardAvoidingView style={styles.mainContainer}>
        <Image
          source={Images.backgroundSolid}
          style={styles.backgroundImage}
          resizeMode="stretch"
        />

        <TouchableOpacity
          onPress={() => this.goBack}
          style={styles.signIn__backButton}
        >
          <Icon name="arrow-left" size={25} color="white" />
        </TouchableOpacity>

        <ScrollView style={styles.container}>
          <View style={{ alignItems: 'center' }}>
            <Image source={Images.logo} style={styles.signIn__logo} />
          </View>

          <View style={styles.section}>
            <Text style={[styles.titleText, styles.sectionText]}>Sign In</Text>

            <TouchableOpacity onPress={() => navigation.replace('Register')}>
              <Text style={styles.sectionText}>
                Don&apos;t have an account? Register.
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    )
  }
}

SignInView.propTypes = {
  navigation: PropTypes.object.isRequired,
}

const mapStateToProps = () => ({})

const mapDispatchToProps = () => ({})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SignInView)
