import React from 'react'
import _ from 'lodash'
import CenterIcon from '../assets/connectify_icon.png'
import TextField from 'material-ui/TextField'
import FloatingActionButton from 'material-ui/FloatingActionButton'
import ContentAdd from 'material-ui/svg-icons/content/add'
import classes from './HomeView.scss'

export const HomeView = ({ switchToEntityAddPage, searchEntity }) => (
  <div>
    <img
      alt='Connectify'
      className={classes.centerIcon}
      src={CenterIcon} />
    <div className={classes.searchContainer}>
      <TextField
        hintText='Enter a name to search and hit enter'
        onKeyDown={handleKeyDown.bind(this, searchEntity)}
        style={{width: '400px'}}
      />
    </div>
    <FloatingActionButton style={{
      'position': 'fixed',
      'bottom': '1rem',
      'right': '1rem'
    }}
      mini
      onClick={switchToEntityAddPage}
    >
      <ContentAdd />
    </FloatingActionButton>
  </div>
)

const handleKeyDown = (searchEntity, event) => {
  // when user hit enter
  if (event.keyCode === 13 || event.which === 13) {
    let query = event.target.value
    if (_.isNil(query)) return
    searchEntity(query)
  }
}

HomeView.propTypes = {
  searchEntity: React.PropTypes.func.isRequired,
  switchToEntityAddPage: React.PropTypes.func.isRequired
}

export default HomeView
