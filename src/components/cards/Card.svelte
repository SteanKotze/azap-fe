<script>
  //  --- Props ---
  export let type = ''
  export let class_name = ''

  //  --- Functionality ---
  const render_card_type = () => {
    if (type === 'login') return 'md:bg-azap-light h-auto 2-96 mx-auto'
    return 'md:bg-azap-light'
  }
</script>

<div class={`md:rounded-2xl md:shadow-xl ${render_card_type()} ${class_name}`}>
  <div class={`${type === 'login' ? 'md:px-16 md:py-12 h-full' : 'h-full p-8 pt-0 md:pt-8'}`}>
    <slot />
  </div>
</div>
