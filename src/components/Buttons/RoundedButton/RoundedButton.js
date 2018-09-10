import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { TouchableOpacity, Text } from 'react-native'
import styles from './RoundedButtonStyles'

export default class RoundedButton extends Component {
  static propTypes = {
    onPress: PropTypes.func,
    text: PropTypes.string,
    children: PropTypes.string,
  }

  getText() {
    const buttonText = this.props.text || this.props.children || ''
    return buttonText.toUpperCase()
  }

  render() {
    return (
      <TouchableOpacity
        style={styles.roundedButton__button}
        onPress={this.props.onPress}
      >
        <Text style={styles.roundedButton__text}>{this.getText()}</Text>
      </TouchableOpacity>
    )
  }
}
