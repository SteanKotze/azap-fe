import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { Redirect, Route, Switch } from 'react-router'
import { QueryClient, QueryClientProvider } from 'react-query'
import { UsersLoginView, ApplicationHomeView, CreateStreamView, OauthRedirectView, ShowStreamView } from './views'
import Layout from './layout/Layout'

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
            <Route path='/users/login' component={UsersLoginView} />
            <Layout>
              <Switch>
                <Route path='/streams/create' component={CreateStreamView} />
                <Route path='/streams/:uuid' component={ShowStreamView} />
                <Route exact path='/' component={ApplicationHomeView} />
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
