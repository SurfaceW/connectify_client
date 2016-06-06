import React from 'react'
import { markdown } from 'markdown'
import { Card, CardHeader, CardText } from 'material-ui/Card'
import classes from './EntityPage.scss'
import _ from 'lodash'

export default class DetailCard extends React.Component {

  static propTypes = {
    detail: React.PropTypes.string
  }

  componentDidMount () {
    this.renderMarkdown()
  }

  componentDidUpdate (prevProps, prevState) {
    this.renderMarkdown()
  }

  renderMarkdown () {
    let renderedHTML = markdown.toHTML(this.props.detail || '')
    let node = document.querySelector('.entity-detail-markdown')
    node.innerHTML = renderedHTML
  }

  render () {
    return (
      <Card
        className={classes['generalCard']}
        initiallyExpanded
        onExpandChange={this.handleExpand.bind(this)}
      >
        <CardHeader
          title='Detail'
          subtitle='Concrete description over this knowledge entity'
          actAsExpander
          showExpandableButton
        />
        <CardText expandable>
          <div className='entity-detail-markdown'>
          {this.props.detail || 'empty detail'}
          </div>
        </CardText>
      </Card>
    )
  }

  handleExpand (state) {
    if (state) {
      _.defer(() => this.renderMarkdown())
    }
  }
}
