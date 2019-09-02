import React, {Component} from 'react'

import { Scene, Router, Reducer, Overlay, Tabs, Modal, Stack, Lightbox, Actions } from 'react-native-router-flux'
import Black from './main/Black'
import Blue from './main/Blue'
import Yellow from './main/Yellow'

export default class AppRouter extends Component {
  props: Props
  state: State

  constructor() {
    super(props)
  }

  componentDidMount() {}

  render() {
    return(
      <Router>
        <Scene key="root">
          <Scene
            key ="black"
            component={Black}
            title="Black"
            initial
          />
          <Scene
            key ="blue"
            component={Blue}
            title="Blue"
          />
          <Scene
            key ="yellow"
            component={Yellow}
            title="Yellow"
          />
        </Scene>
      </Router>
    )
  }

}