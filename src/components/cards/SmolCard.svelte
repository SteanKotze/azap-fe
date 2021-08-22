<script>
  export let className = ''
</script>

<div class={`bg-azap hover:shadow-2xl p-4 rounded-2xl ${className}`}>
  <slot />
</div>
