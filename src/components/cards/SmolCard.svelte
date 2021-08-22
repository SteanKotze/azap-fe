<script>
  export let class_name = ''
</script>

<div class={`bg-azap hover:shadow-2xl p-4 rounded-2xl ${class_name}`}>
  <slot />
</div>
