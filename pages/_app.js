import '../theme/reset.css'

// Component
import { Layout } from '../components'

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
