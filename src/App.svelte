<script>
  //  --- Imports ---
  import { Router, Route } from 'svelte-routing'
  import {
    ShowHomeView,
    ShowStatsView,
    OauthPrimaryView,
    OauthRedirectView,
    OauthSecondaryView,
    CreateStreamView,
    IndexStreamsView,
    ShowCurrentStreamView,
    ShowStreamView,
    ShowCurrentUserView,
    ShowUserView,
  } from './views/index'
  import Layout from './layout/Layout.svelte'

  //  --- Props ---
  export let url = ''
</script>

<Router {url}>
  <Layout>
    <Route path="oauth/redirect"><OauthRedirectView /></Route>
    <Route path="oauth/primary"><OauthPrimaryView /></Route>
    <Route path="oauth/secondary"><OauthSecondaryView /></Route>
    <Route path="stats"><ShowStatsView /></Route>
    <Route path="streams/create"><CreateStreamView /></Route>
    <Route path="streams/me"><ShowCurrentStreamView /></Route>
    <Route path="streams/:uuid"><ShowStreamView /></Route>
    <Route path="streams"><IndexStreamsView /></Route>
    <Route path="users/me"><ShowCurrentUserView /></Route>
    <Route path="users/:uuid"><ShowUserView /></Route>
    <Route path="/"><ShowHomeView /></Route>
  </Layout>
</Router>

<style global lang="postcss">
  @tailwind base;
  @tailwind utilities;
</style>
