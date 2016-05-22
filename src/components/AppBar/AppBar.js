import React from 'react'
import AppBar from 'material-ui/AppBar'

export default (title) => (
  <AppBar
    zDepth={2}
    title={title}
    iconClassNameRight='muidocs-icon-navigation-expand-more'
  />
)
