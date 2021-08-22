<script>
  export let background = 'bg-maroon hover:bg-maroon-light'
  export let class_name = ''
  export let enabled = true
  export let on_click = undefined
</script>

{#if enabled}
  <button
    class={`border focus:outline-none h-9 my-auto px-3 rounded-md ${class_name} ${background}`}
    on:click={on_click}
  >
    <slot />
  </button>
{:else}
  <div
    class={`bg-maroon border cursor-not-allowed flex focus:outline-none h-9 my-auto opacity-30 px-3 rounded-md ${class_name}`}
  >
    <p class="m-auto">
      <slot />
    </p>
  </div>
{/if}
