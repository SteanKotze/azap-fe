<script>
  //  --- Imports ---
  import { Link } from 'svelte-routing'

  //  --- Props ---
  export let className = ''
  export let textSize = ''
  export let to = undefined
</script>

<Link {to} class={`cursor-pointer text-gold hover:text-gold-light ${className} ${textSize}`}>
  <slot />
</Link>
