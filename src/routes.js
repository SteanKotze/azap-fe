import { wrap } from 'svelte-spa-router/wrap'
import {
  ShowHomeView,
  ShowStatsView,
  OauthPrimaryView,
  OauthRedirectView,
  CreateStreamView,
  IndexStreamsView,
  ShowCurrentStreamView,
  ShowStreamView,
  ShowCurrentUserView,
  ShowUserView,
} from './views'

//  --- Routes ---
const routes = {
  "/oauth/redirect": OauthRedirectView,
  "/oauth": OauthPrimaryView,
  "/streams/create": wrap({
    component: CreateStreamView,
    userData: {
      authenticated: false
    },
    conditions: [
      (detail) => {
        return detail.userData.authenticated
      }
    ]
  }),
  "/streams/me": wrap({
    component: ShowCurrentStreamView,
    userData: {
      authenticated: false
    },
    conditions: [
      (detail) => {
        return detail.userData.authenticated
      }
    ]
  }),
  "/streams/:uuid": ShowStreamView,
  "/streams": IndexStreamsView,
  "/users/me": wrap({
    component: ShowCurrentUserView,
    userData: {
      authenticated: false
    },
    conditions: [
      (detail) => {
        return detail.userData.authenticated
      }
    ]
  }),
  "/users/:uuid": ShowUserView,
  "/stats": ShowStatsView,
  "/": ShowHomeView,
  "*": ShowHomeView
}

export {
  routes
}