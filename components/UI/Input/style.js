import styled from 'styled-components'
import theme from '../../../theme'

export const StyledInputWrapper = styled.div`
  width: 100%;

  input, textarea {
  border-color: ${(props) =>
    props.error ? theme.color.red : theme.color.white}; };
  }
`

export const StyledError = styled.span`
  display: block;
  font-size: ${theme.font.size.xs};
  padding-top: 0.5rem;
  color: ${theme.color.red};
`

export const StyledInput = styled.input`
  width: 100%;
  background: transparent;
  color: ${theme.color.white};
  border: 1px solid;
  padding: 1.25rem;

  @media (max-width: ${theme.breakpoint.mobileL}) {
    font-size: ${theme.font.size.sm};
  }
`

export const StyledTextArea = styled.textarea`
  width: 100%;
  background: transparent;
  color: ${theme.color.white};
  border: 1px solid;
  padding: 1.25rem;
  resize: vertical;
`

export const StyledTitleInput = styled(StyledInput)`
  font-family: ${theme.font.family.heading};
  font-weight: 900;
  border: none;
  font-size: ${theme.font.size.xl};
  text-transform: uppercase;
  padding: 0;

  @media (max-width: ${theme.breakpoint.mobileL}) {
    font-size: ${theme.font.size.lg};
  }
`

export const StyledSecondaryInput = styled(StyledInput)`
  border: none;
  padding: 0;
`
