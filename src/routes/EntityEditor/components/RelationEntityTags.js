import React from 'react'

const RelationEntityTags = (tags, onDeleteTag) => (
  <div className='tag-container'>
    {tags.map(tag => (
      <div className='tag-item'>
        <span>{tag.name}</span>
        <span onClick={onDeleteTag.bind(null, tag.name)}>╳</span>
      </div>
    ))}
  </div>
)

RelationEntityTags.PropTypes = {
  tags: React.PropTypes.array.isRequired,
  onDeleteTag: React.PropTypes.func.isRequired
}

export default RelationEntityTags
