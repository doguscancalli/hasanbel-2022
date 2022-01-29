import { createGlobalStyle } from 'styled-components'
import theme from './index'

const GlobalStyle = createGlobalStyle`
@font-face {
  font-family: 'Subjectivity';
  font-weight: 900;
  src: url('/font/Subjectivity-Black.woff2') format('woff2'),
       url('/font/Subjectivity-Black.otf') format('opentype');
}

@font-face {
  font-family: 'Subjectivity';
  font-weight: 700;
  src: url('/font/Subjectivity-Bold.woff2') format('woff2'),
       url('/font/Subjectivity-Bold.otf') format('opentype');
}

*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

::selection {
  color: ${theme.color.white};
  background: ${theme.color.red};
}

html {
  scroll-behavior: smooth;
}

body {
  font-family: ${theme.font.family.body};
  background: ${theme.color.black};
  color: ${theme.color.white};
  padding-bottom: 500px;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: ${theme.font.family.heading};
  font-weight: 900;
  text-transform: uppercase;
}

p {
  line-height: 1.618;
}

a {
  display: inline-block;
  color: inherit;
  text-decoration: none;
}

ul {
  list-style-type: none;
}

img {
  vertical-align: middle;
}

button {
  font-family: inherit;
  border: none;
  cursor: pointer;
}

input, textarea {
  font-family: inherit;
  font-weight: regular;
  outline: none;
  border: none;
}
`

export default GlobalStyle
