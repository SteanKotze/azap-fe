import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { Redirect, Route, Switch } from 'react-router'
import { QueryClient, QueryClientProvider } from 'react-query'
import Layout from './layout/Layout'
import {
  OauthPrimaryView,
  ShowHomeView,
  CreateStreamView,
  OauthRedirectView,
  ShowStreamView,
  ShowCurrentUserView,
  ShowUsersView,
  ShowCurrentStreamView,
} from './views'

const App = () => {
  //  --- Variables ---
  const queryClient = new QueryClient()

  //  --- Response ---
  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <div className='h-full bg-asphalt-200'>
          <Switch>
            <Route path='/oauth/redirect' component={OauthRedirectView} />
            <Route path='/oauth/primary' component={OauthPrimaryView} />
            <Layout>
              <Switch>
                <Route exact path='/streams/create' component={CreateStreamView} />
                <Route exact path='/streams/me' component={ShowCurrentStreamView} />
                <Route exact path='/users/me' component={ShowCurrentUserView} />
                <Route path='/users/:uuid/stream' component={ShowStreamView} />
                <Route path='/users/:uuid' component={ShowUsersView} />
                <Route exact path='/' component={ShowHomeView} />
                <Redirect to='/' />
              </Switch>
            </Layout>
          </Switch>
        </div>
      </QueryClientProvider>
    </BrowserRouter>
  )
}

export default App
