import React from 'react'
import CenterIcon from '../assets/connectify_icon.png'
import TextField from 'material-ui/TextField'
import FloatingActionButton from 'material-ui/FloatingActionButton'
import ContentAdd from 'material-ui/svg-icons/content/add'
import classes from './HomeView.scss'

export const HomeView = () => (
  <div>
    <img
      alt='Connectify'
      className={classes.centerIcon}
      src={CenterIcon} />
    <div className={classes.searchContainer}>
      <TextField
        hintText='Enter a name to search'
        style={{width: '400px'}}
      />
    </div>
    <FloatingActionButton style={{
      'position': 'fixed',
      'bottom': '1rem',
      'right': '1rem'
    }} mini={!!1}>
      <ContentAdd />
    </FloatingActionButton>
  </div>
)

export default HomeView
