import { Helmet } from 'react-helmet-async'

export const NotFound = () => {
  return (
    <>
      <Helmet>
        <title>404</title>
      </Helmet>
      <div>
        <h1 className={'text-3xl font-bold'}>404</h1>
        <p>Page not found</p>
      </div>
    </>
  )
}
