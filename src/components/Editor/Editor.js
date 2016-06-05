import React from 'react'
import AppBar from 'material-ui/AppBar'
import FlatButton from 'material-ui/FlatButton'
import { Editor, EditorState, ContentState } from 'draft-js'

class DraftEditor extends React.Component {

  constructor (props) {
    super(props)
    this.state = { editorState: EditorState.createEmpty() }
    this.onChange = (editorState) => this.setState({editorState})
  }

  componentDidMount () {
    if (this.props.text) {
      this.setState({ editorState:
        EditorState.push(this.state.editorState, ContentState.createFromText(this.props.text), 'adjust-depth') })
    } else {
      this.setState({ editorState:
      EditorState.push(this.state.editorState, ContentState.createFromText('hello, editor!'), 'adjust-depth') })
    }
  }

  render () {
    const { editorState } = this.state
    return (
      <div>
        <AppBar
          zDepth={2}
          title={'Article Writer'}
          iconElementRight={<FlatButton
            label='Save'
            onClick={this.onSave.bind(this)}
          />}
        />
        <Editor editorState={editorState} onChange={this.onChange} />
      </div>
    )
  }

  onSave () {
    let plainText = []
    this.state.editorState.getCurrentContent().getBlockMap().mapEntries((contentBlock) => {
      plainText.push(contentBlock[1].getText())
    })
    plainText = plainText.join('\n')
    this.props.saveEditorText(plainText)
  }
}

DraftEditor.propTypes = {
  text: React.PropTypes.string.isRequired,
  saveEditorText: React.PropTypes.func.isRequired
}

export default DraftEditor
