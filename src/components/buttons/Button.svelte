<script>
  export let background = 'bg-maroon hover:bg-maroon-light'
  export let className = ''
  export let enabled = true
  export let onClick = undefined
</script>

{#if enabled}
  <button class={`border focus:outline-none h-9 my-auto px-3 rounded-md ${className} ${background}`} on:click={onClick}>
    <slot />
  </button>
{:else}
  <div
    class={`bg-maroon border cursor-not-allowed flex focus:outline-none h-9 my-auto opacity-30 px-3 rounded-md ${className}`}
  >
    <p class="m-auto">
      <slot />
    </p>
  </div>
{/if}
