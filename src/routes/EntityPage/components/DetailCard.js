import React from 'react'
import { markdown } from 'markdown'
import { Card, CardHeader, CardText } from 'material-ui/Card'

export default class DetailCard extends React.Component {

  static propTypes = {
    detail: React.PropTypes.string
  }

  constructor (props) {
    super(props)
  }

  componentDidMount () {
    let renderedHTML = markdown.toHTML(this.props.detail || '')
    let node = document.querySelector('.entity-detail-markdown')
    node.innerHTML = renderedHTML
  }

  componentDidUpdate (prevProps, prevState) {
    let renderedHTML = markdown.toHTML(this.props.detail || '')
    let node = document.querySelector('.entity-detail-markdown')
    node.innerHTML = renderedHTML
  }

  render () {
    return (
      <Card>
        <CardHeader title='Detail' />
        <CardText>
          <div className='entity-detail-markdown'>
          {this.props.detail || 'empty detail'}
          </div>
        </CardText>
      </Card>
    )
  }
}
