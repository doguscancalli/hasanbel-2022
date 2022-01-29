import React from 'react'
import PulseLoader from 'react-spinners/PulseLoader'

// Component
import { A, StyledLink, StyledButton } from './style'

const handleLinkWrapping = (Component, props) => {
  const { external, link, target, children, disabled, loading, ...rest } = props

  const button = (
    <Component disabled={disabled || loading} {...rest}>
      {!loading ? children : <PulseLoader color='#ffffff' size={6} />}
    </Component>
  )

  if (external)
    return (
      <A
        href={external}
        target={target || '_blank'}
        rel={!target ? 'noopener noreferrer' : undefined}
      >
        {button}
      </A>
    )

  if (link) return <StyledLink to={link}>{button}</StyledLink>
  return button
}

export const Button = (props) => handleLinkWrapping(StyledButton, props)
