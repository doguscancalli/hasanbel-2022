import React, { useEffect, useState } from 'react'
import { Editor, EditorState } from 'draft-js'
import { stateToHTML } from 'draft-js-export-html'
import 'draft-js/dist/Draft.css'

// Component
import { StyledTextEditor, StyledStyleGroup } from './style'
import BlockStyles from './BlockStyles'
import InlineStyles from './InlineStyles'
import { StyledError } from '../UI/Input/style'

const TextEditor = ({ setText, error, errorMessage }) => {
  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty()
  )
  const [html, setHtml] = useState(null)

  useEffect(() => {
    const contentState = editorState.getCurrentContent()
    let contentHTML = stateToHTML(contentState)
    setHtml(contentHTML)
    setText(html)
    // eslint-disable-next-line
  }, [editorState])

  return (
    <StyledTextEditor>
      <StyledStyleGroup>
        <BlockStyles
          editorState={editorState}
          setEditorState={setEditorState}
        />
        <InlineStyles
          editorState={editorState}
          setEditorState={setEditorState}
        />
      </StyledStyleGroup>
      <div>
        <Editor
          editorState={editorState}
          onChange={setEditorState}
          placeholder='Yazı'
        />
        {error && <StyledError>{errorMessage}</StyledError>}
      </div>
    </StyledTextEditor>
  )
}

export default TextEditor
