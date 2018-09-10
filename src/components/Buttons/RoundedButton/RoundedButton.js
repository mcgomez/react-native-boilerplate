import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { TouchableOpacity, Text } from 'react-native'
import styles from './RoundedButtonStyles'

export default class RoundedButton extends Component {
  getText() {
    const { text, children } = this.props
    const buttonText = text || children || ''
    return buttonText.toUpperCase()
  }

  render() {
    const { onPress } = this.props
    return (
      <TouchableOpacity style={styles.roundedButton__button} onPress={onPress}>
        <Text style={styles.roundedButton__text}>{this.getText()}</Text>
      </TouchableOpacity>
    )
  }
}

RoundedButton.defaultProps = {
  onPress: null,
  text: '',
  children: '',
}

RoundedButton.propTypes = {
  onPress: PropTypes.func,
  text: PropTypes.string,
  children: PropTypes.string,
}
