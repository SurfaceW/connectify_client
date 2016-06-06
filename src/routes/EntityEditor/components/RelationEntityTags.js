import React from 'react'
import _ from 'lodash'
import classes from './EntityEditor.scss'

const RelationEntityTags = (tags, onDeleteTag, id) => (
  <div className='tag-container' key={_.uniqueId('entity_tag_')}>
    {tags.map((tag, key) => (
      <div className={classes['tagItem']} key={key}>
        <span>{tag.name}</span>
        <span
          onClick={onDeleteTag.bind(null, tag.name, id)}
          style={{ 'paddingLeft': '8px', 'cursor': 'pointer' }}
        >╳</span>
      </div>
    ))}
  </div>
)

RelationEntityTags.PropTypes = {
  tags: React.PropTypes.array.isRequired,
  onDeleteTag: React.PropTypes.func.isRequired
}

export default RelationEntityTags
