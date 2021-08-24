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
    <!-- OAuth -->
    <Route path="oauth/redirect"><OauthRedirectView /></Route>
    <Route path="oauth/primary"><OauthPrimaryView /></Route>
    <Route path="oauth/secondary"><OauthSecondaryView /></Route>
    <!-- Streams -->
    <Route path="streams/create"><CreateStreamView /></Route>
    <Route path="streams/me"><ShowCurrentStreamView /></Route>
    <Route path="streams/:uuid" let:params>
      <ShowStreamView uuid={params.uuid} />
    </Route>
    <Route path="streams"><IndexStreamsView /></Route>
    <!-- Users -->
    <Route path="users/me"><ShowCurrentUserView /></Route>
    <Route path="users/:uuid" let:params>
      <ShowUserView uuid={params.uuid} />
    </Route>
    <!-- Application -->
    <Route path="stats"><ShowStatsView /></Route>
    <Route path="/"><ShowHomeView /></Route>
  </Layout>
</Router>

<style global lang="postcss">
  @tailwind base;
  @tailwind utilities;
</style>
