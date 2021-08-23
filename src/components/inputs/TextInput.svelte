<script>
  export let class_name = ''
  export let name = ''
  export let value = ''
</script>

<input
  bind:value
  {name}
  class={`bg-asphalt-light focus:outline-none px-3 py-1 rounded-lg text-asphalt-darkest ${class_name}`} />
