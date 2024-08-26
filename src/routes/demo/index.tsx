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
        <h1 className={'font-bold text-3xl '}>Demo</h1>
        <p>Count: {count}</p>
        <button type="button" onClick={() => setCount(count + 1)}>
          Increment
        </button>
      </div>
    </>
  )
}
