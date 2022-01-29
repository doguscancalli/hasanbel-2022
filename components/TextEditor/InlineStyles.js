import React from 'react'
import { RichUtils } from 'draft-js'

const InlineStyleTypes = [
  {
    value: 'KALIN',
    style: 'BOLD',
  },
  {
    value: 'İTALİK',
    style: 'ITALIC',
  },
  {
    value: 'ALT ÇİZGİ',
    style: 'UNDERLINE',
  },
  {
    value: 'ÜZERİ ÇİZİLİ',
    style: 'STRIKETHROUGH',
  },
]

const InlineStyles = (props) => {
  const setInlineStyle = (event) => {
    event.preventDefault()
    let style = event.currentTarget.getAttribute('use-style')
    props.setEditorState(RichUtils.toggleInlineStyle(props.editorState, style))
  }

  const renderInlineStyleButton = (value, style) => {
    const currentInlineStyle = props.editorState.getCurrentInlineStyle()
    let styleActive = ''
    if (currentInlineStyle.has(style)) {
      styleActive = 'active'
    }
    return (
      <input
        type='button'
        key={style}
        value={value}
        use-style={style}
        onMouseDown={setInlineStyle}
        className={styleActive}
      />
    )
  }

  return (
    <>
      {InlineStyleTypes.map((button) => {
        return renderInlineStyleButton(button.value, button.style)
      })}
    </>
  )
}

export default InlineStyles
