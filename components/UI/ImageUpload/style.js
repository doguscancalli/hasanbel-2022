import styled from 'styled-components'
import theme from '../../../theme'
import hexa from '../../../utils/hexa'

export const StyledImageUpload = styled.div``

export const StyledImageUploadTitle = styled.p`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding: 1.875rem 0 1.375rem 0;
  color: ${(props) => (props.error ? theme.color.red : theme.color.white)};
  font-family: ${theme.font.family.heading};
  font-weight: 900;
  text-align: center;
  cursor: pointer;
  border: 3px dotted;
  border-color: ${(props) =>
    props.error ? hexa(theme.color.red, 1) : hexa(theme.color.white, 0.2)};
  transition: border 0.2s ease;

  span {
    font-size: ${theme.font.size.xs};
    font-family: ${theme.font.family.body};
  }

  &:hover {
    border-color: ${(props) => !props.error && hexa(theme.color.white, 0.6)};
  }

  @media (max-width: ${theme.breakpoint.mobileL}) {
    font-size: ${theme.font.size.sm};
  }
`
export const StyledImageUploadInput = styled.input`
  display: none;
`

export const StyledImagePreview = styled.div`
  max-width: 200px;
  width: 100%;
  aspect-ratio: 1 / 1.4;
  position: relative;
`
