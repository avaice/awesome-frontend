import { useState } from 'preact/hooks'
import { Helmet } from 'react-helmet-async'

export const Demo = () => {
  const [count, setCount] = useState(0)
  return (
    <>
      <Helmet>
        <title>Demo</title>
      </Helmet>
      <div>
        <h1 className={'text-3xl font-bold'}>Demo</h1>
        <p>Count: {count}</p>
        <button type="button" onClick={() => setCount(count + 1)}>
          Increment
        </button>
      </div>
    </>
  )
}
