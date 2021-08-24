<script>
  //  --- Imports ---
  import Router, { push } from 'svelte-spa-router'
  import Layout from './layout/Layout.svelte'
  import { routes } from './routes'

  //  --- Functionality ---
  const redirect_to_login = () => {
    push('/oauth')
    console.info('user not logged in')
  }
</script>

<Layout>
  <Router {routes} on:conditionsFailed={redirect_to_login} />
</Layout>

<style global lang="postcss">
  @tailwind base;
  @tailwind utilities;
</style>
