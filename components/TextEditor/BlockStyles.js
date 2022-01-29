import React from 'react'
import { RichUtils } from 'draft-js'

const BlockStyleTypes = [
  {
    value: 'B1',
    block: 'header-one',
  },
  {
    value: 'B2',
    block: 'header-two',
  },
  {
    value: 'B3',
    block: 'header-three',
  },
  {
    value: 'SIRASIZ LİSTE',
    block: 'unordered-list-item',
  },
  {
    value: 'SIRALI LİSTE',
    block: 'ordered-list-item',
  },
  {
    value: 'ALINTI',
    block: 'blockquote',
  },
]

const BlockStyles = (props) => {
  const setBlockType = (event) => {
    event.preventDefault()
    let type = event.currentTarget.getAttribute('use-type')
    props.setEditorState(RichUtils.toggleBlockType(props.editorState, type))
  }

  const renderBlockTypeButton = (value, block) => {
    const currentBlockType = RichUtils.getCurrentBlockType(props.editorState)
    let typeActive = ''
    if (currentBlockType === block) {
      typeActive = 'active'
    }

    return (
      <input
        type='button'
        key={block}
        value={value}
        use-type={block}
        onMouseDown={setBlockType}
        className={typeActive}
      />
    )
  }

  return (
    <>
      {BlockStyleTypes.map((button) => {
        return renderBlockTypeButton(button.value, button.block)
      })}
    </>
  )
}

export default BlockStyles
