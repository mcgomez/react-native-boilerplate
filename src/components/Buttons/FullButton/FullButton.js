import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { TouchableOpacity, Text } from 'react-native'
import styles from './FullButtonStyles'

export default class FullButton extends Component {
  static propTypes = {
    text: PropTypes.string,
    onPress: PropTypes.func,
    styles: PropTypes.object,
  }

  render() {
    return (
      <TouchableOpacity
        style={[styles.fullButton__button, this.props.styles]}
        onPress={this.props.onPress}
      >
        <Text style={styles.fullButton__text}>
          {this.props.text && this.props.text.toUpperCase()}
        </Text>
      </TouchableOpacity>
    )
  }
}
