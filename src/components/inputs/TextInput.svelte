<script>
  export let className = ''
  export let name = ''
  export let value = ''
</script>

<input bind:value {name} class={`bg-asphalt-ddd focus:outline-none px-3 py-1 rounded-lg text-azap-dark ${className}`} />
