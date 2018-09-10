import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { TouchableOpacity, Text } from 'react-native'
import style from './FullButtonStyles'

export default class FullButton extends Component {
  render() {
    const { styles, onPress, text } = this.props
    return (
      <TouchableOpacity
        style={[style.fullButton__button, styles]}
        onPress={onPress}
      >
        <Text style={styles.fullButton__text}>
          {text && text.toUpperCase()}
        </Text>
      </TouchableOpacity>
    )
  }
}

FullButton.defaultProps = {
  text: '',
  onPress: null,
  styles: null,
}

FullButton.propTypes = {
  text: PropTypes.string,
  onPress: PropTypes.func,
  styles: PropTypes.object,
}
