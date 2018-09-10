import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { View, Text } from 'react-native'
import styles from './AlertMessageStyles'

export default class AlertMessage extends Component {
  render() {
    const messageComponent = null
    const { show, title, style } = this.props
    if (show) {
      return (
        <View style={[styles.alert__container, style]}>
          <View style={styles.alert__contentContainer}>
            <Text allowFontScaling={false} style={styles.alert__message}>
              {title && title.toUpperCase()}
            </Text>
          </View>
        </View>
      )
    }

    return messageComponent
  }
}

AlertMessage.defaultProps = {
  title: '',
  style: null,
  show: true,
}

AlertMessage.propTypes = {
  title: PropTypes.string,
  style: PropTypes.object,
  show: PropTypes.bool,
}
