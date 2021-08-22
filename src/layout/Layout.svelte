<script>
  import Header from './Header.svelte'
  import Footer from './Footer.svelte'
</script>

<div>
  <div class="bg-azap-dark min-h-screen pb-10 flex flex-col">
    <header>
      <Header />
    </header>
    <div class="flex flex-grow w-full justify-center overflow-auto">
      <div class="w-full md:w-2/3 lg:w-3/5 mx-auto">
        <slot />
      </div>
    </div>
  </div>
  <Footer />
</div>
