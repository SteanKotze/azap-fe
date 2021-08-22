<script>
  //  --- Props ---
  export let cardType = ''
  export let className = ''

  //  --- Functionality ---
  const renderCardType = () => {
    if (cardType === 'login') return 'md:bg-azap-light h-auto 2-96 mx-auto'
    return 'bg-azap-light'
  }
</script>

<div class={`md:rounded-2xl md:shadow-xl ${renderCardType()} ${className}`}>
  <div class={`${cardType === 'login' ? 'md:px-16 md:py-12 h-full' : 'h-full p-8 pt-0 md:pt-8'}`}>
    <slot />
  </div>
</div>
