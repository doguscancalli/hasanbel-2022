import Head from 'next/head'
import '../theme/reset.css'

// Component
import { Layout } from '../components'

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Head>
        <title>Hasan Bel</title>
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
        <meta
          name='description'
          content='Umut ediyorum ki yazılarımda kendilerini bulanlara bir umut ışığı doğacak ve doğan ışığın yansımasını hayatının içinde anlamlandıracak.'
        />
      </Head>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
