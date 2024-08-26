import { Helmet } from 'react-helmet-async'
import { Link } from 'wouter'

export const Index = () => {
  return (
    <>
      <Helmet>
        <title>Awesome Frontend</title>
      </Helmet>
      <div>
        <h1 className={'text-3xl font-bold'}>Index</h1>
        <p>Home page</p>
        <Link href="/demo">Demo</Link>
      </div>
    </>
  )
}
