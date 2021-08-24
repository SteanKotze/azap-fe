<script>
  //  --- Imports ---
  import Router from 'svelte-spa-router'
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
  import Layout from './layout/Layout.svelte'

  //  --- Routes ---
  const routes = {
    "/oauth/redirect": OauthRedirectView,
    "/oauth": OauthPrimaryView,
    "/streams/create": CreateStreamView,
    "/streams/me": ShowCurrentStreamView,
    "/streams/:uuid": ShowStreamView,
    "/streams": IndexStreamsView,
    "/users/me": ShowCurrentUserView,
    "/users/:uuid": ShowUserView,
    "/stats": ShowStatsView,
    "/": ShowHomeView,
    "*": ShowHomeView
  }
</script>

<Layout>
  <Router {routes} />
</Layout>

<style global lang="postcss">
  @tailwind base;
  @tailwind utilities;
</style>
