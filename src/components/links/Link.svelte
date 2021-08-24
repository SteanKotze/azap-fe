<script>
  //  --- Imports ---
  import { link } from 'svelte-spa-router'

  //  --- Props ---
  export let class_name = ''
  export let hover = true
  export let text_color = 'text-gold'
  export let text_size = 'text-lg'
  export let to = ''
</script>

{#if to[0] === '/'}
  <a
    href={to}
    use:link
    class={`cursor-pointer ${text_color} ${
      hover ? 'hover:text-gold-light' : ''
    } ${class_name} ${text_size}`}>
    <slot />
  </a>
{:else}
  <a
    href={to}
    class={`cursor-pointer ${text_color} ${
      hover ? 'hover:text-gold-light' : ''
    } ${class_name} ${text_size}`}>
    <slot />
  </a>
{/if}
