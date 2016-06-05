import React from 'react'
import _ from 'lodash'

const RelationEntityTags = (tags, onDeleteTag, id) => (
  <div className='tag-container' key={_.uniqueId('entity_tag_')}>
    {tags.map((tag, key) => (
      <div className='tag-item' key={key}>
        <span>{tag.name}</span>
        <span onClick={onDeleteTag.bind(null, tag.name, id)}>╳</span>
      </div>
    ))}
  </div>
)

RelationEntityTags.PropTypes = {
  tags: React.PropTypes.array.isRequired,
  onDeleteTag: React.PropTypes.func.isRequired
}

export default RelationEntityTags
