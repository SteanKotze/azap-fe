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
  ShowUserView,
  ShowCurrentStreamView,
  OauthSecondaryView,
  ShowStatisticsView,
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
            <Route path='/oauth/secondary' component={OauthSecondaryView} />
            <Layout>
              <Switch>
                <Route exact path='/streams/create' component={CreateStreamView} />
                <Route exact path='/streams/me' component={ShowCurrentStreamView} />
                <Route exact path='/users/me' component={ShowCurrentUserView} />
                <Route path='/users/:uuid/stream' component={ShowStreamView} />
                <Route path='/users/:uuid' component={ShowUserView} />
                <Route exact path='/statistics' component={ShowStatisticsView} />
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
