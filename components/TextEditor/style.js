import styled from 'styled-components'
import theme from '../../theme'

export const StyledTextEditor = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;

  .DraftEditor-editorContainer,
  .DraftEditor-root,
  .public-DraftEditor-content {
    font-family: ${theme.font.family.body};
    color: ${theme.color.white};
  }

  .public-DraftEditorPlaceholder-root {
    color: inherit;
    opacity: 0.4;
  }

  ..public-DraftEditorPlaceholder-hasFocus {
    color: inherit;
  }
`

export const StyledStyleGroup = styled.div`
  display: flex;
  gap: 0.25rem;
  flex-wrap: wrap;

  input {
    padding: 0.5rem;
    font-family: ${theme.font.family.heading};
    font-size: ${theme.font.size.sm};
    font-weight: 900;
    text-transform: uppercase;
    cursor: pointer;

    &.active {
      background-color: ${theme.color.red};
      color: ${theme.color.white};
    }
  }

  @media (max-width: ${theme.breakpoint.mobileL}) {
    input {
      font-size: ${theme.font.size.xs};
    }
  }
`
