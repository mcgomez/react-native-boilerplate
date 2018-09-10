import React, { Component } from 'react'
import { View, StatusBar } from 'react-native'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import PrimaryNav from '../../navigation/AppNavigation'
import StartupActions from '../../redux/StartupRedux'
import ReduxPersist from '../../config/ReduxPersist'

// Styles
import styles from './RootContainerStyles'

class RootContainer extends Component {
  componentDidMount() {
    // if redux persist is not active fire startup action
    const { startup } = this.props
    if (!ReduxPersist.active) {
      startup()
    }
  }

  render() {
    return (
      <View style={styles.applicationView}>
        <StatusBar barStyle="light-content" />
        <PrimaryNav />
      </View>
    )
  }
}

RootContainer.defaultProps = {
  startup: null,
}

RootContainer.propTypes = {
  startup: PropTypes.func,
}

// wraps dispatch to create nicer functions to call within our component
const mapDispatchToProps = dispatch => ({
  startup: () => dispatch(StartupActions.startup()),
})

export default connect(
  null,
  mapDispatchToProps,
)(RootContainer)
