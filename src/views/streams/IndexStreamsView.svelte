<script>
  //  --- Imports ---
  import { Card } from '../../components'
  import { ShowSmolStreamCard } from '../../containers'
  import streams from '../../constants/mock/IndexStreams.js'
</script>

<div class="h-full">
  <Card>
    <p class="text-center pb-4 text-2xl">Active Audio Streams</p>
    <div class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-4">
      {#each streams as stream}
        <ShowSmolStreamCard class_name="w-full" {stream} />
      {/each}
    </div>
  </Card>
</div>
