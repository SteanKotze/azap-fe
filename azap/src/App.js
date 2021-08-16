import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { Redirect, Route, Switch } from 'react-router'
import { QueryClient, QueryClientProvider } from 'react-query'
import { UsersLoginView, ApplicationHomeView, CreateStreamView } from './views'

const App = () => {
  const queryClient = new QueryClient()
  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <div className='h-full'>
          <Switch>
            <Switch>
              <Route path='/streams/create' component={CreateStreamView} />
              <Route path='/users/login' component={UsersLoginView} />
              <Route exact path='/' component={ApplicationHomeView} />
              <Redirect to='/' />
            </Switch>
          </Switch>
        </div>
      </QueryClientProvider>
    </BrowserRouter>
  )
}

export default App