<script>
  import streams from '../../constants/mock/IndexStreams.js'
  import ShowSmolStreamCard from './ShowSmolStreamCard.svelte'
</script>

<div>
  <p class="text-center pb-4 text-2xl">Active Audio Streams</p>
  <div class="flex flex-row flex-wrap space-x-4">
    {#each streams as stream}
      <ShowSmolStreamCard class_name="w-64" {stream} />
    {/each}
  </div>
</div>
