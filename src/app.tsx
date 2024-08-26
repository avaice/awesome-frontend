import { HelmetProvider } from 'react-helmet-async'
import { Route, Switch } from 'wouter-preact'
import { lazyImport } from './lib/lazyImport'

const { Index } = lazyImport(() => import('./routes/index'), 'Index')
const { Demo } = lazyImport(() => import('./routes/demo'), 'Demo')
const { NotFound } = lazyImport(() => import('./routes/not-found'), 'NotFound')

export function App() {
  return (
    <>
      <HelmetProvider>
        <Switch>
          <Route path="/" component={Index} />
          <Route path="/demo" component={Demo} />
          <Route component={NotFound} />
        </Switch>
      </HelmetProvider>
    </>
  )
}
