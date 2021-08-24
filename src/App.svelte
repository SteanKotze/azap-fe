<script>
  //  --- Imports ---
  import Router, { push } from 'svelte-spa-router'
  import Layout from './layout/Layout.svelte'
  import { routes } from './routes'
</script>

<Layout>
  <Router {routes} on:conditionsFailed={() => push("/oauth")} />
</Layout>

<style global lang="postcss">
  @tailwind base;
  @tailwind utilities;
</style>
