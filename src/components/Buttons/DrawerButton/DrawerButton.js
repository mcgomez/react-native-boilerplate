import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Text, TouchableOpacity } from 'react-native'
import styles from './DrawerButtonStyles'

class DrawerButton extends Component {
  render() {
    const { onPress, text } = this.props
    return (
      <TouchableOpacity onPress={onPress}>
        <Text style={styles.drawerButton__text}>{text}</Text>
      </TouchableOpacity>
    )
  }
}

DrawerButton.defaultProps = {
  text: '',
  onPress: null,
}

DrawerButton.propTypes = {
  text: PropTypes.string,
  onPress: PropTypes.func,
}

export default DrawerButton
