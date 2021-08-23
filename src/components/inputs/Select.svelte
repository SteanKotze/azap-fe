<script>
  export let class_name = ''
  export let name = ''
  export let options = []
  export let value = ''
</script>

<select
  bind:value
  {name}
  class={`bg-asphalt-light focus:outline-none px-3 py-1 rounded-lg text-asphalt-darkest ${class_name}`}>
  {#each options as option}
    <option value={option.value} key={option.value}>
      {option.label}
    </option>
  {/each}
</select>
