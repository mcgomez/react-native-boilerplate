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
import { Images } from '../../themes'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { NavigationActions } from 'react-navigation'

// Styles
import styles from './RegisterStyles'

class Register extends Component {
  static propTypes = {
    navigation: PropTypes.object,
  }

  goBack = () => {
    const backAction = NavigationActions.back()
    this.props.navigation.dispatch(backAction)
  }

  render() {
    return (
      <KeyboardAvoidingView style={styles.mainContainer}>
        <Image
          source={Images.backgroundSolid}
          style={styles.backgroundImage}
          resizeMode="stretch"
        />

        <TouchableOpacity onPress={this.goBack} style={styles.backButton}>
          <Icon name="arrow-left" size={25} color="white" />
        </TouchableOpacity>

        <ScrollView style={styles.container}>
          <View style={{ alignItems: 'center' }}>
            <Image source={Images.logo} style={styles.logo} />
          </View>

          <View style={styles.section}>
            <Text style={[styles.titleText, styles.sectionText]}>Sign Up</Text>

            <TouchableOpacity
              onPress={() => this.props.navigation.replace('SignIn')}
            >
              <Text style={styles.sectionText}>
                Already have an account? Sign in.
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    )
  }
}

const mapStateToProps = state => {
  return {}
}

const mapDispatchToProps = dispatch => {
  return {}
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Register)
