import { HelmetProvider } from 'react-helmet-async'
import { Route, Switch } from 'wouter'
import { Index } from './routes'
import { NotFound } from './routes/NotFound'
import { Demo } from './routes/demo'

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
