<script>
  //  --- Imports ---
  import { Link } from 'svelte-routing'

  //  --- Props ---
  export let class_name = ''
  export let hover = true
  export let text_color = 'text-gold'
  export let text_size = 'text-lg'
  export let to = undefined
</script>

<Link
  {to}
  class={`cursor-pointer ${text_color} ${
    hover ? 'hover:text-gold-light' : ''
  } ${class_name} ${text_size}`}>
  <slot />
</Link>
